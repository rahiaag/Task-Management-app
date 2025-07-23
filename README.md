

# Task Manager API

This is a simple REST API built using Node.js, Express, and TypeScript.
It allows you to create, read, update, and delete tasks. Tasks are stored in memory.

## How to Run

1. Install dependencies

```

npm install

```

2. Start the server

For development:
```

npm run dev

```

For production:
```

npm run build
npm start

````

The server will run at `http://localhost:3000`

## API Endpoints

### Create a Task
**POST** `/tasks`

Request body:
```json
{
  "title": "Learn Node",
  "description": "Build a simple API",
  "status": "PENDING"
}
````

### Get All Tasks

**GET** `/tasks`

### Get Task by ID

**GET** `/tasks/:id`

### Update a Task

**PUT** `/tasks/:id`

Request body (any field optional):

```json
{
  "title": "Update title",
  "description": "Update desc",
  "status": "COMPLETED"
}
```

### Delete a Task

**DELETE** `/tasks/:id`

## Example Task Object

```json
{
  "id": "some-uuid",
  "title": "Learn Node",
  "description": "Build a simple API",
  "status": "PENDING",
  "createdAt": "2025-07-23T12:00:00.000Z",
  "updatedAt": "2025-07-23T12:00:00.000Z"
}
```
