Node.js Todo List API

This Node.js API allows you to manage a simple todo list.

Installation:

1. Clone the repository:
   git clone https://github.com/your_username/nodejs-todo-api.git

2. Navigate to the project directory:
   cd nodejs-todo-api

3. Install dependencies:
   npm install

4. Start the server:
   npm start

The API will be available at http://localhost:3000.

Endpoints:

GET /api/todos

Description: Retrieve all todos.
Method: GET
Response: Returns an array of todo objects with id and text properties.

Example Request:
GET /api/todos

Example Response:
[
  { "id": 1, "text": "Buy groceries" },
  { "id": 2, "text": "Walk the dog" }
]

POST /api/todos

Description: Add a new todo to the list.
Method: POST
Request Body: Requires a JSON object with id and text properties.
Response: Returns the newly created todo object.

Example Request:
POST /api/todos
Content-Type: application/json

{
  "id": 3,
  "text": "Finish Node.js API documentation"
}

Example Response:
{ "id": 3, "text": "Finish Node.js API documentation" }

Error Handling:

If the request body for creating a new todo is missing or invalid, the API will respond with a 400 status code and an error message in JSON format.

Usage:

1. To fetch all todos, make a GET request to http://localhost:3000/api/todos.

2. To add a new todo, make a POST request to http://localhost:3000/api/todos with the todo details in the request body.

Example Usage with cURL:

1. Fetch all todos:
   curl -X GET http://localhost:3000/api/todos

2. Add a new todo:
   curl -X POST -H "Content-Type: application/json" -d '{"id": 3, "text": "Finish Node.js API documentation"}' http://localhost:3000/api/todos

Notes:

- This API is for demonstration purposes only and uses a simple in-memory array to store todos. Data will be reset each time the server restarts.
- For production use, consider using a database (e.g., MongoDB) to store and manage todos persistently.