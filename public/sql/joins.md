# Joining Tables

A `JOIN` clause is used to combine rows from two or more tables, based on a related column between them.

## Types of Joins
- **(INNER) JOIN:** Returns records that have matching values in both tables.
- **LEFT (OUTER) JOIN:** Returns all records from the left table, and the matched records from the right table.
- **RIGHT (OUTER) JOIN:** Returns all records from the right table, and the matched records from the left table.
- **FULL (OUTER) JOIN:** Returns all records when there is a match in either left or right table.

## Syntax (INNER JOIN)
```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

## Example
Let's look at a selection from the "Orders" table and the "Customers" table.

Notice that the "CustomerID" column in the "Orders" table refers to the "CustomerID" in the "Customers" table. The relationship between the two tables above is the "CustomerID" column.

Then, we can create the following SQL statement (that contains an `INNER JOIN`), that selects records that have matching values in both tables:

```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```