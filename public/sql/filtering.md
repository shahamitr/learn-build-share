# Filtering Data with WHERE

The `WHERE` clause is used to filter records. It is used to extract only those records that fulfill a specified condition.

## Syntax
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

## Operators in The WHERE Clause
The following operators can be used in the `WHERE` clause:
- `=` Equal
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal
- `<=` Less than or equal
- `<>` Not equal. Note: In some versions of SQL this operator may be written as `!=`
- `BETWEEN` Between a certain range
- `LIKE` Search for a pattern
- `IN` To specify multiple possible values for a column

## Example
To select all customers from the country "Mexico", in the "Customers" table:

```sql
SELECT * FROM Customers
WHERE Country = 'Mexico';
```