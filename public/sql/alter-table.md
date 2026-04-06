# SQL ALTER TABLE Statement

The `ALTER TABLE` statement is used to add, delete, or modify columns in an existing table.
The `ALTER TABLE` statement is also used to add and drop various constraints on an existing table.

## ALTER TABLE - ADD Column

To add a column in a table, use the following syntax:

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

## ALTER TABLE - DROP COLUMN

To delete a column in a table, use the following syntax (notice that some database systems don't allow dropping a column):

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

## ALTER TABLE - RENAME COLUMN

To rename a column in a table, use the following syntax:

```sql
ALTER TABLE table_name
RENAME COLUMN old_name to new_name;
```

## Try It Yourself!

Use the interactive lab to add a new column to the `users` table.
