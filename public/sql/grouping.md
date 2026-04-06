# Grouping Data

The `GROUP BY` statement groups rows that have the same values into summary rows, like "find the number of customers in each country".

The `GROUP BY` statement is often used with aggregate functions (`COUNT()`, `MAX()`, `MIN()`, `SUM()`, `AVG()`) to group the result-set by one or more columns.

## Syntax
```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);
```

## Example
The following SQL statement lists the number of customers in each country:

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
```

### Grouping with Sorting
The following SQL statement lists the number of customers in each country, sorted high to low:

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
```