# The SQL DROP TABLE Statement

The `DROP TABLE` statement is used to drop an existing table in a database.

**Note:** Be careful before dropping a table. Deleting a table will result in loss of complete information stored in the table!

## DROP TABLE Syntax

```sql
DROP TABLE table_name;
```

## Example

The following SQL drops the existing table "Shippers":

```sql
DROP TABLE Shippers;
```

## TRUNCATE TABLE

The `TRUNCATE TABLE` statement is used to delete the data inside a table, but not the table itself.

```sql
TRUNCATE TABLE table_name;
```
