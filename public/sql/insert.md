# Inserting Data

The `INSERT INTO` statement is used to insert new records in a table.

## Syntax
It is possible to write the `INSERT INTO` statement in two ways.

### 1. Specifying Column Names
The first way specifies both the column names and the values to be inserted:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

### 2. Without Column Names
If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table.

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

## Example
The following SQL statement inserts a new record in the "Customers" table:

```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```