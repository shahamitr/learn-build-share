# The SQL LIKE Operator

The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column.

There are two wildcards often used in conjunction with the `LIKE` operator:
* The percent sign (`%`) represents zero, one, or multiple characters
* The underscore sign (`_`) represents one, single character

## Syntax

```sql
SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;
```

## Examples

* `WHERE CustomerName LIKE 'a%'`	Finds any values that start with "a"
* `WHERE CustomerName LIKE '%a'`	Finds any values that end with "a"
* `WHERE CustomerName LIKE '%or%'`	Finds any values that have "or" in any position
* `WHERE CustomerName LIKE '_r%'`	Finds any values that have "r" in the second position

## Try It Yourself!

Use the interactive lab to find users whose name starts with 'A' using `LIKE 'A%'`.
