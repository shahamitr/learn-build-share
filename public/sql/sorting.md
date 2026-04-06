# Sorting Data

The `ORDER BY` keyword is used to sort the result-set in ascending or descending order.

## Syntax
The `ORDER BY` keyword sorts the records in ascending order by default. To sort the records in descending order, use the `DESC` keyword.

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

## Example
The following SQL statement selects all customers from the "Customers" table, sorted by the "Country" column:

```sql
SELECT * FROM Customers
ORDER BY Country;
```

### Sorting Descending
The following SQL statement selects all customers from the "Customers" table, sorted DESCENDING by the "Country" column:

```sql
SELECT * FROM Customers
ORDER BY Country DESC;
```

### Sorting by Multiple Columns
The following SQL statement selects all customers from the "Customers" table, sorted by the "Country" and the "CustomerName" column. This means that it orders by Country, but if some rows have the same Country, it orders them by CustomerName:

```sql
SELECT * FROM Customers
ORDER BY Country, CustomerName;
```