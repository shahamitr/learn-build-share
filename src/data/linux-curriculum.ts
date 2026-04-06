export const linuxCurriculum = [
  {
    id: 'linux-basics',
    title: 'Linux Basics',
    description: 'Learn the fundamental concepts of the Linux operating system.',
    estimatedDuration: '1 hour',
    modules: [
      {
        id: 'linux-intro',
        title: 'Introduction to Linux',
        description: 'What is Linux, its history, and why it is so popular.',
        duration: '15 mins',
        type: 'video',
        path: '/linux/intro.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-filesystem',
        title: 'The Linux Filesystem',
        description: 'Understanding the directory structure and how files are organized.',
        duration: '20 mins',
        type: 'reading',
        path: '/linux/filesystem.md',
        icon: 'Folder',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-navigating',
        title: 'Navigating the Filesystem',
        description: 'Learn basic commands like pwd, ls, and cd to move around.',
        duration: '25 mins',
        type: 'interactive',
        path: '/linux/navigating.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      }
    ]
  },
  {
    id: 'linux-file-management',
    title: 'File Management',
    description: 'Learn how to create, move, copy, and delete files and directories.',
    estimatedDuration: '50 mins',
    modules: [
      {
        id: 'linux-creating-files',
        title: 'Creating Files and Directories',
        description: 'Using touch and mkdir to create new files and folders.',
        duration: '15 mins',
        type: 'interactive',
        path: '/linux/creating-files.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-moving-copying',
        title: 'Moving and Copying',
        description: 'Using cp and mv to manage your files.',
        duration: '20 mins',
        type: 'interactive',
        path: '/linux/moving-copying.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-deleting',
        title: 'Deleting Files',
        description: 'Using rm and rmdir safely.',
        duration: '15 mins',
        type: 'interactive',
        path: '/linux/deleting.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      }
    ]
  },
  {
    id: 'linux-permissions',
    title: 'Permissions and Ownership',
    description: 'Understand how Linux handles file permissions and user ownership.',
    estimatedDuration: '1 hour',
    modules: [
      {
        id: 'linux-understanding-permissions',
        title: 'Understanding Permissions',
        description: 'Read, write, and execute permissions explained.',
        duration: '20 mins',
        type: 'reading',
        path: '/linux/understanding-permissions.md',
        icon: 'Shield',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-chmod',
        title: 'Changing Permissions',
        description: 'Using chmod to modify file access.',
        duration: '25 mins',
        type: 'interactive',
        path: '/linux/chmod.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-chown',
        title: 'Changing Ownership',
        description: 'Using chown to change file owners.',
        duration: '15 mins',
        type: 'interactive',
        path: '/linux/chown.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      }
    ]
  },
  {
    id: 'linux-advanced-commands',
    title: 'Advanced Commands',
    description: 'Learn powerful text processing and search commands.',
    estimatedDuration: '3 hours 10 mins',
    modules: [
      {
        id: 'linux-grep',
        title: 'Searching Text with grep',
        description: 'Learn how to search for patterns within files using grep.',
        duration: '20 mins',
        type: 'interactive',
        path: '/linux/grep.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-find',
        title: 'Finding Files',
        description: 'Learn how to locate files and directories using the find command.',
        duration: '20 mins',
        type: 'interactive',
        path: '/linux/find.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-pipes',
        title: 'Pipes and Redirection',
        description: 'Learn how to chain commands together and redirect output.',
        duration: '25 mins',
        type: 'interactive',
        path: '/linux/pipes.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-tar',
        title: 'Archiving with tar',
        description: 'Learn how to create and extract tar archives.',
        duration: '20 mins',
        type: 'interactive',
        path: '/linux/tar.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-wget',
        title: 'Downloading Files',
        description: 'Learn how to download files from the internet using wget and curl.',
        duration: '15 mins',
        type: 'interactive',
        path: '/linux/wget.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-top',
        title: 'Process Monitoring',
        description: 'Learn how to monitor system processes using top and ps.',
        duration: '20 mins',
        type: 'interactive',
        path: '/linux/top.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-df',
        title: 'Disk Usage',
        description: 'Learn how to check disk space usage with df and du.',
        duration: '15 mins',
        type: 'interactive',
        path: '/linux/df.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-sed',
        title: 'Text Processing with sed',
        description: 'Learn how to use the stream editor for filtering and transforming text.',
        duration: '25 mins',
        type: 'interactive',
        path: '/linux/sed.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      },
      {
        id: 'linux-awk',
        title: 'Text Processing with awk',
        description: 'Learn how to use awk for pattern scanning and processing.',
        duration: '30 mins',
        type: 'interactive',
        path: '/linux/awk.md',
        icon: 'Terminal',
        color: 'slate',
        bgColor: 'slate'
      }
    ]
  }
];
