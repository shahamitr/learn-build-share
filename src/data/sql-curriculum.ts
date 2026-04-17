export const sqlCurriculum = [
  {
    id: 'sql-intro',
    title: 'Introduction to SQL',
    description: 'Learn the basics of Structured Query Language and relational databases.',
    estimatedDuration: '1 hour',
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
        id: 'sql-select-distinct',
        title: 'SELECT DISTINCT',
        description: 'Return only distinct (different) values.',
        duration: '15 mins',
        type: 'interactive',
        path: '/sql/select-distinct.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-and-or-not',
        title: 'AND, OR, NOT',
        description: 'Filter records with multiple conditions.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/and-or-not.md',
        icon: 'Terminal',
        color: 'sky',
        bgColor: 'sky',
        xp: 75
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
      },
      {
        id: 'sql-intro-challenge',
        title: 'SQL Intro Final Challenge',
        description: 'Test your knowledge of basic SQL queries with this interactive challenge.',
        duration: '30 mins',
        type: 'interactive',
        path: '/sql/intro-challenge.md',
        icon: 'Award',
        color: 'amber',
        bgColor: 'amber',
        xp: 200
      }
    ]
  },
  {
    id: 'sql-data-manipulation',
    title: 'Data Manipulation',
    description: 'Learn how to insert, update, and delete data in a database.',
    estimatedDuration: '1 hour 30 mins',
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
    estimatedDuration: '4 hours 25 mins',
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
    estimatedDuration: '1 hour 55 mins',
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
      }
    ]
  },
  {
    id: 'sql-constraints',
    title: 'SQL Constraints',
    description: 'Learn how to enforce data integrity with constraints.',
    estimatedDuration: '1 hour 30 mins',
    modules: [
      {
        id: 'sql-not-null',
        title: 'NOT NULL',
        description: 'Ensure a column cannot have a NULL value.',
        duration: '15 mins',
        type: 'interactive',
        path: '/sql/not-null.md',
        icon: 'Shield',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-unique',
        title: 'UNIQUE',
        description: 'Ensure all values in a column are different.',
        duration: '15 mins',
        type: 'interactive',
        path: '/sql/unique.md',
        icon: 'Shield',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-primary-key',
        title: 'PRIMARY KEY',
        description: 'Uniquely identify each record in a table.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/primary-key.md',
        icon: 'Shield',
        color: 'sky',
        bgColor: 'sky',
        xp: 75
      },
      {
        id: 'sql-foreign-key',
        title: 'FOREIGN KEY',
        description: 'Prevent actions that would destroy links between tables.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/foreign-key.md',
        icon: 'Shield',
        color: 'sky',
        bgColor: 'sky',
        xp: 75
      },
      {
        id: 'sql-check',
        title: 'CHECK',
        description: 'Ensure that all values in a column satisfy a specific condition.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/check.md',
        icon: 'Shield',
        color: 'sky',
        bgColor: 'sky',
        xp: 75
      }
    ]
  },
  {
    id: 'sql-dates',
    title: 'SQL Dates',
    description: 'Learn how to work with date and time data.',
    estimatedDuration: '45 mins',
    modules: [
      {
        id: 'sql-dates-intro',
        title: 'SQL Dates Intro',
        description: 'Understand how to handle date and time data in SQL.',
        duration: '20 mins',
        type: 'interactive',
        path: '/sql/dates-intro.md',
        icon: 'Calendar',
        color: 'sky',
        bgColor: 'sky',
        xp: 50
      },
      {
        id: 'sql-dates-functions',
        title: 'SQL Date Functions',
        description: 'Learn common functions for manipulating dates.',
        duration: '25 mins',
        type: 'interactive',
        path: '/sql/dates-functions.md',
        icon: 'Calendar',
        color: 'sky',
        bgColor: 'sky',
        xp: 75
      }
    ]
  },
  {
    id: 'sql-capstone',
    title: 'SQL Capstone Project',
    description: 'Apply all your SQL knowledge to build a complete database solution.',
    estimatedDuration: '2 hours',
    modules: [
      {
        id: 'sql-capstone-project',
        title: 'SQL Capstone Project',
        description: 'Design, build, and query a database for a real-world application.',
        duration: '2 hours',
        type: 'interactive',
        path: '/sql/capstone.md',
        icon: 'Award',
        color: 'rose',
        bgColor: 'rose',
        xp: 500
      }
    ]
  }
];
