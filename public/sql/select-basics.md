# The SELECT Statement

The `SELECT` statement is used to select data from a database. The data returned is stored in a result table, called the result-set.

## Syntax
```sql
SELECT column1, column2, ...
FROM table_name;
```

Here, `column1`, `column2`, ... are the field names of the table you want to select data from. If you want to select all the fields available in the table, use the following syntax:

```sql
SELECT * FROM table_name;
```

## Example
Let's say we have a table named `Customers`:

| CustomerID | CustomerName | ContactName | Country |
| :--- | :--- | :--- | :--- |
| 1 | Alfreds Futterkiste | Maria Anders | Germany |
| 2 | Ana Trujillo Emparedados y helados | Ana Trujillo | Mexico |
| 3 | Antonio Moreno Taquería | Antonio Moreno | Mexico |

To select the `CustomerName` and `Country` columns from the `Customers` table, we use the following SQL statement:

```sql
SELECT CustomerName, Country FROM Customers;
```