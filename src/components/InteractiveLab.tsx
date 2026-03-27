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
          {(courseId === 'git' || courseId === 'docker' || courseId === 'github' || courseId === 'cybersecurity' || courseId === 'antigravity') && (
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


