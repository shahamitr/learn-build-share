# API Testing Basics

API (Application Programming Interface) testing is a type of software testing that involves testing APIs directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.

Since APIs lack a GUI, API testing is performed at the message layer.

## Why API Testing?

*   **Earlier Testing:** You can test the core logic of the application without waiting for the UI to be ready.
*   **Easier Test Maintenance:** UIs change frequently, but APIs are generally more stable.
*   **Faster Resolution:** When an API test fails, you know exactly where the problem is.
*   **Speed and Coverage:** API tests execute much faster than UI tests.

## Common API Methods (HTTP Verbs)

*   **GET:** Retrieve data from a server.
*   **POST:** Send data to a server to create a new resource.
*   **PUT:** Update an existing resource on the server.
*   **DELETE:** Remove a resource from the server.
*   **PATCH:** Partially update a resource.

## HTTP Status Codes

Understanding status codes is crucial for API testing:

*   **2xx (Success):** The request was successfully received, understood, and accepted (e.g., 200 OK, 201 Created).
*   **3xx (Redirection):** Further action needs to be taken in order to complete the request.
*   **4xx (Client Error):** The request contains bad syntax or cannot be fulfilled (e.g., 400 Bad Request, 401 Unauthorized, 404 Not Found).
*   **5xx (Server Error):** The server failed to fulfill an apparently valid request (e.g., 500 Internal Server Error).

## What to Test in an API

1.  **Status Code:** Verify the correct HTTP status code is returned.
2.  **Response Payload:** Verify the response body contains the expected data and structure (JSON/XML).
3.  **Headers:** Verify specific headers are present in the response.
4.  **Performance:** Check the response time.
5.  **Security:** Verify authentication and authorization.

## Tools for API Testing

*   **Postman:** A popular tool for manual and automated API testing.
*   **cURL:** A command-line tool for transferring data with URLs.
*   **Swagger/OpenAPI:** Often used to document APIs and provides a basic interface for testing.
