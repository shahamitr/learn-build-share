# SQL IN and BETWEEN Operators

## The IN Operator

The `IN` operator allows you to specify multiple values in a `WHERE` clause.
The `IN` operator is a shorthand for multiple `OR` conditions.

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

### Example

```sql
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');
```

## The BETWEEN Operator

The `BETWEEN` operator selects values within a given range. The values can be numbers, text, or dates.
The `BETWEEN` operator is inclusive: begin and end values are included.

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

### Example

```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;
```

## Try It Yourself!

Use the interactive lab to find users whose age is `BETWEEN 20 AND 30`.
