import { useState, useRef, useEffect } from 'react';
import { Terminal, Code, Bot, Play, CheckCircle, Loader2, RefreshCcw, Info } from 'lucide-react';
import { labData, LabTask } from '../data/lab-data';

interface InteractiveLabProps {
  courseId: string;
  moduleId: string;
  onComplete?: () => void;
}

interface Message {
  role: 'user' | 'bot';
  content: string;
  code?: string;
}

export default function InteractiveLab({ courseId, moduleId, onComplete }: InteractiveLabProps) {
  const [activeTab, setActiveTab] = useState<'lab' | 'solution'>('lab');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<{type: 'input'|'output', text: string}[]>([
    { type: 'output', text: 'Welcome to the interactive lab environment.' },
    { type: 'output', text: 'Type commands to practice what you learned.' }
  ]);
  const [codeContent, setCodeContent] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [runLogs, setRunLogs] = useState<string[]>([]);
  const [aiMessages, setAiMessages] = useState<Message[]>([]);
  const [aiInput, setAiInput] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [gitConfig, setGitConfig] = useState({ name: '', email: '' });
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const currentLab: LabTask | undefined = labData[courseId]?.[moduleId];

  // Initialize content based on module
  useEffect(() => {
    setIsCompleted(false);
    setRunLogs([]);
    setTerminalHistory([
      { type: 'output', text: `Welcome to the ${courseId.toUpperCase()} lab environment.` },
      { type: 'output', text: 'Follow the task instructions to complete this module.' }
    ]);

    if (courseId === 'github-actions' || courseId === 'github') {
      setCodeContent(currentLab?.initialContent || `name: CI Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run a one-line script
        run: echo Hello, world!`);
    } else if (courseId === 'ai' || courseId === 'prompt-engineering' || courseId === 'manual-testing') {
      setAiMessages([
        { role: 'bot', content: currentLab?.task || `Hi! I'm your AI coding assistant for the ${moduleId} module. Try asking me to help you with a task related to this tutorial!` }
      ]);
    }
  }, [courseId, moduleId, currentLab]);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, aiMessages]);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [runLogs]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const input = terminalInput.trim();
    const newHistory = [...terminalHistory, { type: 'input' as const, text: input }];
    
    let response = '';
    const cmd = input.split(' ')[0];
    const args = input.split(' ').slice(1);

    // Check if it matches the expected command
    let isCorrectCommand = false;
    if (currentLab?.expectedCommands) {
      for (const expected of currentLab.expectedCommands) {
        if (input.startsWith(expected)) {
          isCorrectCommand = true;
          break;
        }
      }
    }

    if (isCorrectCommand) {
      setIsCompleted(true);
      onComplete?.();
    }

    if (courseId === 'git') {
      if (cmd === 'git') {
        const subCmd = args[0];
        switch (subCmd) {
          case '--version':
            response = 'git version 2.40.1';
            break;
          case 'config':
            const isGlobal = args[1] === '--global';
            const keyIndex = isGlobal ? 2 : 1;
            const valIndex = isGlobal ? 3 : 2;
            const configKey = args[keyIndex];
            const configVal = input.split('"')[1] || args[valIndex];
            
            if (args[1] === '--list' || args[1] === '-l') {
              response = `user.name=${gitConfig.name || 'Learner'}\nuser.email=${gitConfig.email || 'learner@example.com'}`;
            } else if (configKey === 'user.name') {
              if (configVal) {
                setGitConfig(prev => ({ ...prev, name: configVal }));
                response = '';
              } else {
                response = gitConfig.name || 'Learner';
              }
            } else if (configKey === 'user.email') {
              if (configVal) {
                setGitConfig(prev => ({ ...prev, email: configVal }));
                response = '';
              } else {
                response = gitConfig.email || 'learner@example.com';
              }
            } else {
              response = 'usage: git config [<options>]';
            }
            break;
          case 'init':
            response = 'Initialized empty Git repository in /home/project/.git/';
            break;
          case 'status':
            response = 'On branch main\nNo commits yet\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\tindex.html\n\nnothing added to commit but untracked files present (use "git add" to track)';
            break;
          case 'add':
            response = `Added ${args[1] || 'files'} to staging area.`;
            break;
          case 'commit':
            response = '[main (root-commit) a1b2c3d] initial commit\n 1 file changed, 10 insertions(+)\n create mode 100644 index.html';
            break;
          case 'log':
            response = 'commit a1b2c3d4e5f6g7h8i9j0 (HEAD -> main)\nAuthor: Learner <learner@example.com>\nDate:   Fri Mar 27 14:32:06 2026 +0000\n\n    initial commit';
            break;
          case 'stash':
            response = 'Saved working directory and index state WIP on main: a1b2c3d initial commit';
            break;
          case 'rebase':
            response = 'Successfully rebased and updated refs/heads/main.';
            break;
          case 'cherry-pick':
            response = '[main b2c3d4e] cherry-picked commit\n Date: Fri Mar 27 15:00:00 2026 +0000\n 1 file changed, 5 insertions(+)';
            break;
          default:
            response = `git: '${subCmd}' is not a git command. See 'git --help'.`;
        }
      } else if (cmd === 'ls') {
        response = 'index.html  README.md  src/';
      } else if (cmd === 'cat') {
        if (args[0] === 'index.html') {
          response = '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Project</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>';
        } else {
          response = `cat: ${args[0]}: No such file or directory`;
        }
      } else if (cmd === 'clear') {
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'docker') {
      if (cmd === 'docker') {
        const subCmd = args[0];
        switch (subCmd) {
          case 'ps':
            response = 'CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES';
            break;
          case 'images':
            response = 'REPOSITORY   TAG       IMAGE ID       CREATED       SIZE\nnode         18-alpine 1a2b3c4d5e6f   2 days ago    167MB';
            break;
          case 'run':
            response = `Unable to find image '${args[1]}' locally\nlatest: Pulling from library/${args[1]}\nDigest: sha256:...\nStatus: Downloaded newer image for ${args[1]}:latest\nHello from Docker!`;
            break;
          case 'build':
            response = 'Sending build context to Docker daemon  2.048kB\nStep 1/3 : FROM node:18-alpine\n ---> 1a2b3c4d5e6f\nStep 2/3 : COPY . .\n ---> Using cache\nStep 3/3 : CMD ["node", "index.js"]\n ---> Running in a1b2c3d4e5f6\nSuccessfully built a1b2c3d4e5f6\nSuccessfully tagged my-app:latest';
            break;
          case 'stop':
            response = args[1] || 'Container stopped.';
            break;
          case 'rm':
            response = args[1] || 'Container removed.';
            break;
          case 'rmi':
            response = `Untagged: ${args[1]}\nDeleted: sha256:1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f`;
            break;
          case 'volume':
            if (args[1] === 'create') {
              response = args[2] || 'volume_name';
            } else {
              response = 'Usage: docker volume <command>';
            }
            break;
          case 'network':
            if (args[1] === 'ls') {
              response = 'NETWORK ID     NAME      DRIVER    SCOPE\n1a2b3c4d5e6f   bridge    bridge    local\n7g8h9i0j1k2l   host      host      local\n3m4n5o6p7q8r   none      null      local';
            } else {
              response = 'Usage: docker network <command>';
            }
            break;
          default:
            response = `docker: '${subCmd}' is not a docker command.`;
        }
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'github') {
      if (cmd === 'gh') {
        const subCmd = args[0];
        switch (subCmd) {
          case '--version':
            response = 'gh version 2.23.0 (2023-02-07)';
            break;
          case 'repo':
            if (args[1] === 'create') {
              response = `✓ Created repository user/${args[2] || 'my-awesome-project'} on GitHub`;
            } else if (args[1] === 'list') {
              response = 'NAME                     DESCRIPTION                        INFO\nuser/my-awesome-project  A great project                    public\nuser/learn-build-share   Community learning platform        public';
            } else {
              response = 'Usage: gh repo <command> [flags]';
            }
            break;
          case 'pr':
            if (args[1] === 'list') {
              response = '\nShowing 2 of 2 open pull requests in user/repo\n\n#1  feat: add login  main  (about 2 hours ago)\n#2  fix: typo in readme  main  (about 5 hours ago)';
            } else if (args[1] === 'create') {
              response = 'Creating pull request for feat/login into main in user/repo\n\n✓ https://github.com/user/repo/pull/3';
            } else {
              response = 'Usage: gh pr <command> [flags]';
            }
            break;
          case 'issue':
            if (args[1] === 'list') {
              response = '\nShowing 1 of 1 open issue in user/repo\n\n#4  bug: login button not working  (about 1 hour ago)';
            } else if (args[1] === 'create') {
              response = '✓ Created issue #5: New feature request';
            } else {
              response = 'Usage: gh issue <command> [flags]';
            }
            break;
          case 'auth':
            if (args[1] === 'status') {
              response = 'github.com\n  ✓ Logged in to github.com as user (keychain)\n  ✓ Git operations protocol: https\n  ✓ Token: ***************************';
            } else {
              response = 'Usage: gh auth <command> [flags]';
            }
            break;
          default:
            response = `gh: '${subCmd}' is not a gh command.`;
        }
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'antigravity') {
      if (cmd === 'npx') {
        if (args[0] === 'create-antigravity-app') {
          response = `Creating a new Antigravity app in ${args[1] || 'my-app'}...\nInstalling dependencies...\nSuccess! Created ${args[1] || 'my-app'} at /home/project/${args[1] || 'my-app'}`;
        } else {
          response = `npx: command not found: ${args[0]}`;
        }
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'cybersecurity') {
      if (cmd === 'ping') {
        response = `PING ${args[0]} (192.168.1.1): 56 data bytes\n64 bytes from 192.168.1.1: icmp_seq=0 ttl=64 time=0.042 ms\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=0.045 ms`;
      } else if (cmd === 'nmap') {
        response = `Starting Nmap 7.92 ( https://nmap.org ) at 2026-03-27 15:30 UTC\nNmap scan report for ${args[0]}\nHost is up (0.00013s latency).\nNot shown: 998 closed tcp ports (reset)\nPORT   STATE SERVICE\n22/tcp open  ssh\n80/tcp open  http\n\nNmap done: 1 IP address (1 host up) scanned in 0.12 seconds`;
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'gitlab') {
      if (cmd === 'gitlab-runner') {
        if (args[0] === '--version') {
          response = 'gitlab-runner version 16.0.0 (abcdef12)';
        } else if (args[0] === 'status') {
          response = 'Runtime platform                                    arch=amd64 os=linux pid=1234 revision=abcdef12 version=16.0.0\ngitlab-runner: Service is running';
        } else {
          response = `gitlab-runner: command not found: ${args[0]}`;
        }
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'kubernetes') {
      if (cmd === 'kubectl') {
        if (args[0] === 'cluster-info') {
          response = 'Kubernetes control plane is running at https://127.0.0.1:6443\nCoreDNS is running at https://127.0.0.1:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy';
        } else if (args[0] === 'get' && args[1] === 'pods') {
          response = 'NAME                     READY   STATUS    RESTARTS   AGE\nnginx-7854ff6677-v2wzx   1/1     Running   0          5m';
        } else if (args[0] === 'get' && (args[1] === 'services' || args[1] === 'svc')) {
          response = 'NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE\nkubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   10d';
        } else if (args[0] === 'describe' && args[1] === 'pod') {
          response = `Name:         ${args[2] || 'my-pod'}\nNamespace:    default\nPriority:     0\nNode:         minikube/192.168.49.2\nStart Time:   Sun, 29 Mar 2026 10:00:00 +0000\nLabels:       app=my-app\nAnnotations:  <none>\nStatus:       Running\nIP:           10.244.0.5\nIPs:\n  IP:  10.244.0.5\nContainers:\n  my-container:\n    Container ID:   docker://abcdef1234567890\n    Image:          nginx:latest\n    Image ID:       docker-pullable://nginx@sha256:...\n    Port:           80/TCP\n    Host Port:      0/TCP\n    State:          Running\n      Started:      Sun, 29 Mar 2026 10:00:05 +0000\n    Ready:          True\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from default-token-abcde (ro)\nConditions:\n  Type              Status\n  Initialized       True \n  Ready             True \n  ContainersReady   True \n  PodScheduled      True \nVolumes:\n  default-token-abcde:\n    Type:        Secret (a volume populated by a Secret)\n    SecretName:  default-token-abcde\n    Optional:    false\nQoS Class:       BestEffort\nNode-Selectors:  <none>\nTolerations:     node.kubernetes.io/not-ready:NoExecute op=Exists for 300s\n                 node.kubernetes.io/unreachable:NoExecute op=Exists for 300s\nEvents:\n  Type    Reason     Age   From               Message\n  ----    ------     ----  ----               -------\n  Normal  Scheduled  5m    default-scheduler  Successfully assigned default/${args[2] || 'my-pod'} to minikube\n  Normal  Pulling    5m    kubelet            Pulling image "nginx:latest"\n  Normal  Pulled     5m    kubelet            Successfully pulled image "nginx:latest"\n  Normal  Created    5m    kubelet            Created container my-container\n  Normal  Started    5m    kubelet            Started container my-container`;
        } else if (args[0] === 'logs') {
          response = `192.168.1.1 - - [29/Mar/2026:10:05:00 +0000] "GET / HTTP/1.1" 200 612 "-" "curl/7.81.0" "-"`;
        } else {
          response = `kubectl: command not found: ${args[0]}`;
        }
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'rust') {
      if (cmd === 'rustc') {
        if (args[0] === '--version') {
          response = 'rustc 1.75.0 (82e1608df 2023-12-21)';
        } else {
          response = `rustc: command not found: ${args[0]}`;
        }
      } else if (cmd === 'cargo') {
        if (args[0] === 'new') {
          response = `Created binary (application) \`${args[1]}\` package`;
        } else if (args[0] === 'build') {
          response = '   Compiling my-project v0.1.0 (/home/user/my-project)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.52s';
        } else if (args[0] === 'run') {
          response = '   Compiling my-project v0.1.0 (/home/user/my-project)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.52s\n     Running `target/debug/my-project`\nHello, world!';
        } else {
          response = `cargo: command not found: ${args[0]}`;
        }
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'linux') {
      if (cmd === 'uname') {
        response = 'Linux 5.15.0-101-generic x86_64';
      } else if (cmd === 'ls') {
        if (input.includes('| grep')) {
          response = 'hello.txt';
        } else if (args[0] === '/') {
          response = 'bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var';
        } else if (args[0] === '-l') {
          response = 'total 12\ndrwxr-xr-x 2 user user 4096 Mar 27 10:00 .\ndrwxr-xr-x 3 user user 4096 Mar 27 09:00 ..\n-rw-r--r-- 1 user user   15 Mar 27 10:00 hello.txt';
        } else {
          response = 'hello.txt  script.sh';
        }
      } else if (cmd === 'pwd') {
        response = '/home/user/project';
      } else if (cmd === 'touch') {
        response = '';
      } else if (cmd === 'cp') {
        response = '';
      } else if (cmd === 'rm') {
        response = '';
      } else if (cmd === 'chmod') {
        response = '';
      } else if (cmd === 'chown') {
        response = '';
      } else if (cmd === 'grep') {
        response = 'Hello World!';
      } else if (cmd === 'find') {
        response = './hello.txt';
      } else if (cmd === 'tar') {
        response = 'file.txt';
      } else if (cmd === 'wget') {
        response = 'Saving to: ‘file.zip’\n\nfile.zip           100%[===================>]   1.23M  --.-KB/s    in 0.1s    \n\n2026-03-29 10:00:00 (12.3 MB/s) - ‘file.zip’ saved [1289748/1289748]';
      } else if (cmd === 'ps') {
        response = '  PID TTY          TIME CMD\n    1 ?        00:00:01 systemd\n   10 ?        00:00:00 bash\n  123 ?        00:00:00 ps';
      } else if (cmd === 'df') {
        response = 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        50G   10G   38G  21% /\ntmpfs           3.9G     0  3.9G   0% /dev/shm';
      } else if (cmd === 'sed') {
        response = 'orange\norange\nbanana';
      } else if (cmd === 'awk') {
        response = 'John 25\nJane 30\nDoe 22';
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'aws') {
      if (cmd === 'aws') {
        if (args[0] === '--version') {
          response = 'aws-cli/2.15.0 Python/3.11.6 Linux/5.15.0-101-generic exe/x86_64.ubuntu.22 prompt/off';
        } else if (args[0] === 'configure') {
          response = 'AWS Access Key ID [None]: \nAWS Secret Access Key [None]: \nDefault region name [None]: \nDefault output format [None]: ';
        } else if (args[0] === 'ec2') {
          if (args[1] === 'describe-regions') {
            response = '{\n    "Regions": [\n        {\n            "Endpoint": "ec2.eu-north-1.amazonaws.com",\n            "RegionName": "eu-north-1",\n            "OptInStatus": "opt-in-not-required"\n        }\n    ]\n}';
          } else if (args[1] === 'describe-instances') {
            response = '{\n    "Reservations": []\n}';
          } else if (args[1] === 'start-instances') {
            response = '{\n    "StartingInstances": [\n        {\n            "CurrentState": {\n                "Code": 0,\n                "Name": "pending"\n            },\n            "InstanceId": "i-1234567890abcdef0",\n            "PreviousState": {\n                "Code": 80,\n                "Name": "stopped"\n            }\n        }\n    ]\n}';
          } else if (args[1] === 'stop-instances') {
            response = '{\n    "StoppingInstances": [\n        {\n            "CurrentState": {\n                "Code": 64,\n                "Name": "stopping"\n            },\n            "InstanceId": "i-1234567890abcdef0",\n            "PreviousState": {\n                "Code": 16,\n                "Name": "running"\n            }\n        }\n    ]\n}';
          } else if (args[1] === 'describe-volumes') {
            response = '{\n    "Volumes": []\n}';
          } else {
            response = `aws ec2: command not found: ${args[1]}`;
          }
        } else if (args[0] === 'lambda') {
          if (args[1] === 'list-functions') {
            response = '{\n    "Functions": []\n}';
          } else {
            response = `aws lambda: command not found: ${args[1]}`;
          }
        } else if (args[0] === 's3') {
          if (args[1] === 'ls') {
            response = '2026-03-27 10:00:00 my-awesome-bucket';
          } else if (args[1] === 'mb') {
            response = `make_bucket: ${args[2]}`;
          } else if (args[1] === 'rm') {
            response = `delete: ${args[2]}`;
          } else {
            response = `aws s3: command not found: ${args[1]}`;
          }
        } else if (args[0] === 'iam') {
          if (args[1] === 'list-users') {
            response = '{\n    "Users": [\n        {\n            "Path": "/",\n            "UserName": "admin",\n            "UserId": "AIDA1234567890",\n            "Arn": "arn:aws:iam::123456789012:user/admin",\n            "CreateDate": "2026-03-27T10:00:00Z"\n        }\n    ]\n}';
          } else {
            response = `aws iam: command not found: ${args[1]}`;
          }
        } else if (args[0] === 'cloudwatch') {
          if (args[1] === 'list-metrics') {
            response = '{\n    "Metrics": [\n        {\n            "Namespace": "AWS/EC2",\n            "MetricName": "CPUUtilization",\n            "Dimensions": [\n                {\n                    "Name": "InstanceId",\n                    "Value": "i-1234567890abcdef0"\n                }\n            ]\n        }\n    ]\n}';
          } else {
            response = `aws cloudwatch: command not found: ${args[1]}`;
          }
        } else {
          response = `aws: command not found: ${args[0]}`;
        }
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    } else if (courseId === 'sql') {
      if (cmd === 'mysql') {
        response = 'Welcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 10\nServer version: 8.0.35-0ubuntu0.22.04.1 (Ubuntu)\n\nType \'help;\' or \'\\h\' for help. Type \'\\c\' to clear the current input statement.\n\nmysql>';
      } else if (input.toUpperCase().startsWith('SELECT')) {
        if (input.toUpperCase().includes('HAVING')) {
          response = '+----------+----------+\n| city     | COUNT(*) |\n+----------+----------+\n| New York |        5 |\n+----------+----------+\n1 row in set (0.00 sec)';
        } else if (input.toUpperCase().includes('UNION')) {
          response = '+-------+\n| name  |\n+-------+\n| Alice |\n| Bob   |\n| Carol |\n| Dave  |\n+-------+\n4 rows in set (0.00 sec)';
        } else if (input.toUpperCase().includes('AS USER_NAME')) {
          response = '+-----------+\n| User_Name |\n+-----------+\n| Alice     |\n| Bob       |\n| Carol     |\n+-----------+\n3 rows in set (0.00 sec)';
        } else if (input.toUpperCase().includes('MAX(AGE)')) {
          response = '+----------+\n| MAX(age) |\n+----------+\n|       30 |\n+----------+\n1 row in set (0.00 sec)';
        } else if (input.toUpperCase().includes('LIKE \'A%\'')) {
          response = '+----+-------+-----+\n| id | name  | age |\n+----+-------+-----+\n|  1 | Alice |  25 |\n+----+-------+-----+\n1 row in set (0.00 sec)';
        } else if (input.toUpperCase().includes('BETWEEN 20 AND 30')) {
          response = '+----+-------+-----+\n| id | name  | age |\n+----+-------+-----+\n|  1 | Alice |  25 |\n|  2 | Bob   |  30 |\n|  3 | Carol |  22 |\n+----+-------+-----+\n3 rows in set (0.00 sec)';
        } else if (input.toUpperCase().includes('COUNT')) {
          response = '+----------+----------+\n| city     | COUNT(*) |\n+----------+----------+\n| New York |        5 |\n| London   |        3 |\n+----------+----------+\n2 rows in set (0.00 sec)';
        } else if (input.toUpperCase().includes('JOIN')) {
          response = '+-------+------------+\n| name  | order_date |\n+-------+------------+\n| Alice | 2026-03-25 |\n| Bob   | 2026-03-26 |\n+-------+------------+\n2 rows in set (0.00 sec)';
        } else if (input.toUpperCase().includes('IS NULL')) {
          response = '+----+------+------+\n| id | name | email|\n+----+------+------+\n|  3 | Carol| NULL |\n+----+------+------+\n1 row in set (0.00 sec)';
        } else if (input.toUpperCase().includes('CASE')) {
          response = '+-------+--------+\n| name  | status |\n+-------+--------+\n| Alice | Adult  |\n| Bob   | Adult  |\n| Carol | Minor  |\n+-------+--------+\n3 rows in set (0.00 sec)';
        } else if (input.toUpperCase().includes('WHERE')) {
          response = '+----+-------+-----+\n| id | name  | age |\n+----+-------+-----+\n|  1 | Alice |  25 |\n|  2 | Bob   |  30 |\n+----+-------+-----+\n2 rows in set (0.00 sec)';
        } else {
          response = '+----+-------+-----+\n| id | name  | age |\n+----+-------+-----+\n|  1 | Alice |  25 |\n|  2 | Bob   |  30 |\n|  3 | Carol |  22 |\n+----+-------+-----+\n3 rows in set (0.00 sec)';
        }
      } else if (input.toUpperCase().startsWith('INSERT')) {
        response = 'Query OK, 1 row affected (0.01 sec)';
      } else if (input.toUpperCase().startsWith('UPDATE')) {
        response = 'Query OK, 1 row affected (0.01 sec)\nRows matched: 1  Changed: 1  Warnings: 0';
      } else if (input.toUpperCase().startsWith('DELETE')) {
        response = 'Query OK, 1 row affected (0.01 sec)';
      } else if (input.toUpperCase().startsWith('CREATE TABLE')) {
        response = 'Query OK, 0 rows affected (0.02 sec)';
      } else if (input.toUpperCase().startsWith('ALTER TABLE')) {
        response = 'Query OK, 0 rows affected (0.03 sec)\nRecords: 0  Duplicates: 0  Warnings: 0';
      } else if (input.toUpperCase().startsWith('DROP TABLE')) {
        response = 'Query OK, 0 rows affected (0.02 sec)';
      } else if (input.toUpperCase().startsWith('CREATE VIEW')) {
        response = 'Query OK, 0 rows affected (0.01 sec)';
      } else {
        response = `bash: ${cmd}: command not found`;
      }
    }

    newHistory.push({ type: 'output' as const, text: response || 'Command executed successfully.' });
    if (isCorrectCommand) {
      newHistory.push({ type: 'output' as const, text: 'Task completed! Great job. 🎉' });
    }
    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setRunLogs(['Starting workflow...', 'Checking out repository...', 'Setting up runner...']);
    
    const isSuccess = courseId === 'github-actions' && moduleId === '01-intro' 
      ? codeContent?.includes('echo Hello from Learn Build Share!') 
      : true;

    const steps = [
      'Running actions/checkout@v3...',
      'Successfully checked out code.',
      `Executing: ${codeContent.split('run: ')[1]?.split('\n')[0] || 'echo Hello, world!'}`,
      isSuccess ? 'Hello from Learn Build Share!' : 'Hello, world!',
      isSuccess ? 'Workflow completed successfully. ✅' : 'Workflow completed. (Did you follow the task?)'
    ];

    if (isSuccess) {
      setIsCompleted(true);
      onComplete?.();
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setRunLogs(prev => [...prev, steps[i]]);
        i++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 800);
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    const userMsg = aiInput.trim();
    setAiMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setAiInput('');
    
    // Simulate AI thinking
    setTimeout(() => {
      let botResponse = "That's a great question! Based on this module, I recommend focusing on how the context influences the output.";
      let botCode = "";

      if (userMsg.toLowerCase()?.includes('python') || userMsg.toLowerCase()?.includes('code')) {
        botResponse = "Sure! Here is an example of how you might implement that:";
        botCode = "def example_function():\n    print('Hello from AI Lab!')\n    return True";
      } else if (userMsg.toLowerCase()?.includes('prompt')) {
        botResponse = "When writing prompts, try to be as specific as possible. Include constraints and desired output format.";
      } else if (courseId === 'manual-testing' && userMsg.toLowerCase()?.includes('test case')) {
        botResponse = "That looks like a solid test case! Make sure to include preconditions, steps, expected results, and actual results.";
      }

      if ((moduleId === '02-prompts' || courseId === 'prompt-engineering' || courseId === 'manual-testing') && userMsg.length > 20) {
        setIsCompleted(true);
        onComplete?.();
        botResponse = "Excellent response! You've provided enough context for a great result. Task completed! 🎉";
      }

      setAiMessages(prev => [...prev, { role: 'bot', content: botResponse, code: botCode }]);
    }, 1000);
  };

  const renderLabContent = () => {
    return (
      <div className="flex flex-col h-full gap-4">
        {/* Task Instruction Card */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex gap-3 shrink-0">
          <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-indigo-900 mb-1">Current Task</h4>
            <p className="text-sm text-indigo-700 leading-relaxed">
              {currentLab?.task || "Practice the concepts learned in this module using the workspace below."}
            </p>
          </div>
        </div>

        {/* Workspace Area */}
        <div className="flex-1 min-h-0">
          {(courseId === 'git' || courseId === 'docker' || courseId === 'github' || courseId === 'cybersecurity' || courseId === 'antigravity' || courseId === 'gitlab' || courseId === 'kubernetes' || courseId === 'rust' || courseId === 'aws' || courseId === 'sql' || courseId === 'linux') && (
            <div className="flex flex-col h-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 font-mono text-sm">
              <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300">Terminal</span>
                </div>
                <button 
                  onClick={() => setTerminalHistory([{ type: 'output', text: 'Terminal reset.' }])}
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Reset Terminal"
                >
                  <RefreshCcw className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto text-slate-300 space-y-2 scrollbar-thin scrollbar-thumb-slate-700">
                {terminalHistory.map((line, i) => (
                  <div key={i} className={line.type === 'input' ? 'text-emerald-400' : 'text-slate-300 whitespace-pre-wrap'}>
                    {line.type === 'input' ? `$ ${line.text}` : line.text}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
              <form onSubmit={handleTerminalSubmit} className="p-4 border-t border-slate-700 flex items-center gap-2 bg-slate-800/50">
                <span className="text-emerald-400 font-bold">$</span>
                <input 
                  type="text" 
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-slate-300"
                  placeholder="Type a command..."
                  autoFocus
                />
              </form>
            </div>
          )}

          {(courseId === 'github-actions' || courseId === 'github') && (
            <div className="flex flex-col h-full gap-4">
              <div className="flex-1 flex flex-col bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700 font-mono text-sm">
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">workflow.yml</span>
                  </div>
                  <button 
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="flex items-center gap-1 text-xs bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 text-white px-3 py-1 rounded transition-colors"
                  >
                    {isRunning ? <Loader2 className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
                    Run Workflow
                  </button>
                </div>
                <textarea 
                  value={codeContent}
                  onChange={(e) => setCodeContent(e.target.value)}
                  className="flex-1 p-4 bg-transparent text-slate-300 outline-none resize-none scrollbar-thin scrollbar-thumb-slate-700"
                  spellCheck="false"
                />
              </div>
              
              {runLogs.length > 0 && (
                <div className="h-40 bg-black rounded-xl border border-slate-800 p-3 font-mono text-xs overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800">
                  <div className="text-slate-500 mb-2 uppercase tracking-widest text-[10px] font-bold">Execution Logs</div>
                  {runLogs.map((log, i) => (
                    <div key={i} className={`mb-1 ${log?.includes('✅') ? 'text-emerald-400' : log?.includes('Executing') ? 'text-blue-400' : 'text-slate-400'}`}>
                      <span className="text-slate-600 mr-2">[{new Date().toLocaleTimeString([], {hour12: false})}]</span>
                      {log}
                    </div>
                  ))}
                  <div ref={logsEndRef} />
                </div>
              )}
            </div>
          )}

          {(courseId === 'ai' || courseId === 'prompt-engineering' || courseId === 'manual-testing') && (
            <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-inner">
              <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-slate-700">{courseId === 'manual-testing' ? 'Testing Lab' : 'AI Prompt Lab'}</span>
                </div>
                <button 
                  onClick={() => setAiMessages([{ role: 'bot', content: 'Chat reset. How can I help?' }])}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto bg-slate-50/30 space-y-4 scrollbar-thin scrollbar-thumb-slate-200">
                {aiMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                        : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                    }`}>
                      {msg.content}
                      {msg.code && (
                        <pre className="mt-2 bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto">
                          <code>{msg.code}</code>
                        </pre>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
              <form onSubmit={handleAiSubmit} className="p-4 border-t border-slate-200 bg-white">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    className="flex-1 border border-slate-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Type your prompt here..."
                  />
                  <button 
                    type="submit"
                    disabled={!aiInput.trim()}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <h3 className="font-semibold text-slate-800 flex items-center gap-2">
          <CheckCircle className={`w-5 h-5 ${isCompleted ? 'text-emerald-500' : 'text-slate-300'}`} />
          Practical Lab
        </h3>
        <div className="flex gap-1 bg-slate-200/50 p-1 rounded-lg">
          <button 
            onClick={() => setActiveTab('lab')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'lab' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Workspace
          </button>
          <button 
            onClick={() => setActiveTab('solution')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'solution' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Solution
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-4 bg-slate-50/30 overflow-hidden">
        {activeTab === 'lab' ? (
          renderLabContent()
        ) : (
          <div className="h-full flex flex-col items-center justify-center bg-slate-50 rounded-xl border border-slate-200 border-dashed p-8 text-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${isCompleted ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">
              {isCompleted ? "Lab Completed!" : "Try it yourself first!"}
            </h4>
            <p className="text-sm text-slate-600 mb-6">
              {isCompleted 
                ? "You've successfully completed the task. Here is the recommended approach:" 
                : "The solution will be revealed after you attempt the exercise in the workspace."}
            </p>
            
            {isCompleted && (
              <div className="w-full bg-white p-4 rounded-xl border border-slate-200 text-left font-mono text-xs text-slate-700">
                <div className="text-slate-400 mb-2 uppercase tracking-widest text-[10px] font-bold">Recommended Solution</div>
                {currentLab?.solution || "Focus on the key concepts discussed in the tutorial."}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


