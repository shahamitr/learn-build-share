# SQL Aliases

SQL aliases are used to give a table, or a column in a table, a temporary name.
Aliases are often used to make column names more readable.
An alias only exists for the duration of that query.

## Alias Column Syntax

```sql
SELECT column_name AS alias_name
FROM table_name;
```

## Alias Table Syntax

```sql
SELECT column_name(s)
FROM table_name AS alias_name;
```

## Example

```sql
SELECT CustomerID AS ID, CustomerName AS Customer
FROM Customers;
```

## Try It Yourself!

Use the interactive lab to select the `name` column as `User_Name` from the `users` table.
