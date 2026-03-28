# Web, API & SQL for Testers

In this module, we'll gain hands-on experience with web UI, APIs, and SQL.

## Web Application Testing
- **Client-Server Architecture:** Understanding how the browser (client) communicates with the server.
- **HTTP/HTTPS:** The protocol used for web communication.
- **Browser Developer Tools (F12):**
    - **Elements:** Inspecting and modifying the HTML/CSS of a page.
    - **Console:** Viewing errors and running JavaScript.
    - **Network:** Monitoring network requests and responses (crucial for debugging).
    - **Application:** Managing cookies, local storage, and session storage.
- **Cross-Browser Testing:** Ensuring the application works on Chrome, Firefox, Safari, and Edge.
- **Responsive Web Design:** Testing the application on different screen sizes and devices.

## API Testing (Manual)
- **What is an API?** Application Programming Interface. A way for different software systems to communicate.
- **REST vs SOAP:** Understanding the two most common API architectures.
- **HTTP Methods:**
    - **GET:** Retrieve data.
    - **POST:** Create data.
    - **PUT/PATCH:** Update data.
    - **DELETE:** Remove data.
- **HTTP Status Codes:**
    - **2xx (Success):** 200 OK, 201 Created.
    - **4xx (Client Error):** 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found.
    - **5xx (Server Error):** 500 Internal Server Error, 503 Service Unavailable.
- **Postman for Testers:**
    - **Collections:** Organizing your API requests.
    - **Environments:** Managing variables for different environments (e.g., dev, staging).
    - **Assertions:** Writing simple tests to verify response data.

## SQL for Testers
- **Relational Databases:** Understanding tables, rows, columns, and keys (Primary Key, Foreign Key).
- **Basic SQL Queries:**
    - `SELECT * FROM users WHERE age > 18;`
    - `INSERT INTO products (name, price) VALUES ('Laptop', 1200);`
    - `UPDATE orders SET status = 'Shipped' WHERE id = 101;`
    - `DELETE FROM logs WHERE created_at < '2023-01-01';`
- **Joins:** Combining data from multiple tables.
    - `INNER JOIN`: Returns records with matching values in both tables.
    - `LEFT JOIN`: Returns all records from the left table and matching records from the right table.
- **Data Validation:** Verifying that the UI correctly reflects the data in the database.

## Practical Tip
When testing APIs, always verify the **response status code**, the **response body**, and the **response time**. Use the **Network tab** in your browser to see what's happening under the hood.
