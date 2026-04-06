# SQL Functions

SQL has many built-in functions for performing calculations on data.

## Aggregate Functions

Aggregate functions operate on a set of values and return a single value.

### MIN() and MAX()

The `MIN()` function returns the smallest value of the selected column.
The `MAX()` function returns the largest value of the selected column.

```sql
SELECT MIN(price) FROM products;
SELECT MAX(price) FROM products;
```

### COUNT(), AVG(), and SUM()

The `COUNT()` function returns the number of rows that matches a specified criterion.
The `AVG()` function returns the average value of a numeric column.
The `SUM()` function returns the total sum of a numeric column.

```sql
SELECT COUNT(product_id) FROM products;
SELECT AVG(price) FROM products;
SELECT SUM(quantity) FROM order_details;
```

## Try It Yourself!

Use the interactive lab on the right to practice these functions.
Try finding the maximum age of users in the database!
