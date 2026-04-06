export const sqlCurriculum = [
  {
    id: 'sql-intro',
    title: 'Introduction to SQL',
    description: 'Learn the basics of Structured Query Language and relational databases.',
    modules: [
      {
        id: 'sql-what-is-db',
        title: 'What is a Database?',
        description: 'Understanding relational databases and tables.',
        duration: '15 mins',
        type: 'video',
        path: '/sql/what-is-db.md',
        icon: 'Database',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-select-basics',
        title: 'The SELECT Statement',
        description: 'Learn how to retrieve data from a database table.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/select-basics.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'sql-filtering',
        title: 'Filtering Data with WHERE',
        description: 'Use the WHERE clause to filter records based on specific conditions.',
        duration: '25 mins',
        type: 'interactive',
        path: '/sql/filtering.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      }
    ]
  },
  {
    id: 'sql-data-manipulation',
    title: 'Data Manipulation',
    description: 'Learn how to insert, update, and delete data in a database.',
    modules: [
      {
        id: 'sql-insert',
        title: 'Inserting Data',
        description: 'Use the INSERT INTO statement to add new records to a table.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/insert.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'sql-update',
        title: 'Updating Data',
        description: 'Use the UPDATE statement to modify existing records.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/update.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'sql-delete',
        title: 'Deleting Data',
        description: 'Use the DELETE statement to remove records from a table.',
        duration: '15 mins',
        type: 'interactive',
        path: '/sql/delete.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'sql-null-values',
        title: 'SQL NULL Values',
        description: 'Learn how to test for NULL values using IS NULL and IS NOT NULL.',
        duration: '15 mins',
        type: 'interactive',
        path: '/sql/null-values.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-functions',
        title: 'SQL Functions',
        description: 'Learn MIN(), MAX(), COUNT(), AVG(), and SUM() functions.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/functions.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      }
    ]
  },
  {
    id: 'sql-advanced-queries',
    title: 'Advanced Queries',
    description: 'Learn how to sort, group, and join data from multiple tables.',
    modules: [
      {
        id: 'sql-like',
        title: 'The LIKE Operator',
        description: 'Search for a specified pattern in a column.',
        duration: '15 mins',
        type: 'interactive',
        path: '/sql/like.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-in-between',
        title: 'IN and BETWEEN',
        description: 'Specify multiple values or a range of values in a WHERE clause.',
        duration: '15 mins',
        type: 'interactive',
        path: '/sql/in-between.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-sorting',
        title: 'Sorting Data',
        description: 'Use the ORDER BY clause to sort the result set.',
        duration: '15 mins',
        type: 'interactive',
        path: '/sql/sorting.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-grouping',
        title: 'Grouping Data',
        description: 'Use the GROUP BY clause with aggregate functions like COUNT, MAX, MIN, SUM, AVG.',
        duration: '25 mins',
        type: 'interactive',
        path: '/sql/grouping.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 150
      },
      {
        id: 'sql-joins',
        title: 'Joining Tables',
        description: 'Learn how to combine rows from two or more tables based on a related column between them.',
        duration: '30 mins',
        type: 'interactive',
        path: '/sql/joins.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 200
      },
      {
        id: 'sql-aliases',
        title: 'SQL Aliases',
        description: 'Give a table, or a column in a table, a temporary name.',
        duration: '15 mins',
        type: 'interactive',
        path: '/sql/aliases.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-union',
        title: 'The UNION Operator',
        description: 'Combine the result-set of two or more SELECT statements.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/union.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'sql-having',
        title: 'The HAVING Clause',
        description: 'Filter records that work on summarized GROUP BY results.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/having.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'sql-case',
        title: 'The CASE Statement',
        description: 'Go through conditions and return a value when the first condition is met.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/case.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'sql-transactions',
        title: 'SQL Transactions',
        description: 'Learn ACID properties, COMMIT, ROLLBACK, and SAVEPOINT.',
        duration: '25 mins',
        type: 'interactive',
        path: '/sql/transactions.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 150
      },
      {
        id: 'sql-stored-procedures',
        title: 'Stored Procedures',
        description: 'Learn how to create and execute stored procedures.',
        duration: '30 mins',
        type: 'interactive',
        path: '/sql/stored-procedures.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 200
      },
      {
        id: 'sql-indexes',
        title: 'SQL Indexes',
        description: 'Learn how to create and use indexes to improve query performance.',
        duration: '25 mins',
        type: 'interactive',
        path: '/sql/indexes.md',
        icon: 'Database',
        color: 'sky',
        bgColor: 'sky',
        xp: 150
      }
    ]
  },
  {
    id: 'sql-database',
    title: 'Database Management',
    description: 'Learn how to create, alter, and manage database tables.',
    modules: [
      {
        id: 'sql-create-table',
        title: 'CREATE TABLE',
        description: 'Create a new table in a database.',
        duration: '25 mins',
        type: 'interactive',
        path: '/sql/create-table.md',
        icon: 'Database',
        color: 'sky',
        bgColor: 'sky',
        xp: 150
      },
      {
        id: 'sql-alter-table',
        title: 'ALTER TABLE',
        description: 'Add, delete, or modify columns in an existing table.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/alter-table.md',
        icon: 'Database',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'sql-drop-table',
        title: 'DROP TABLE',
        description: 'Drop an existing table in a database.',
        duration: '10 mins',
        type: 'interactive',
        path: '/sql/drop-table.md',
        icon: 'Database',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-views',
        title: 'SQL Views',
        description: 'Create, update, and drop views.',
        duration: '25 mins',
        type: 'interactive',
        path: '/sql/views.md',
        icon: 'Database',
        color: 'sky',
        bgColor: 'sky',
        xp: 150
      },
      {
        id: 'sql-injection',
        title: 'SQL Injection',
        description: 'Learn about SQL Injection and how to prevent it.',
        duration: '20 mins',
        type: 'reading',
        path: '/sql/injection.md',
        icon: 'Shield',
        color: 'sky',
        bgColor: 'sky',
        xp: 100
      },
      {
        id: 'sql-hosting',
        title: 'SQL Hosting',
        description: 'Learn how to host your SQL database.',
        duration: '15 mins',
        type: 'reading',
        path: '/sql/hosting.md',
        icon: 'Cloud',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      }
    ]
  }
];
