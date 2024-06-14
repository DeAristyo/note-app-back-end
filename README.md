# Simple Note API

A simple note-taking API built with Hapi.js. This API allows users to manage notes with the following functionalities:

- Add notes to the API
- Retrieve all notes
- Retrieve a note by ID
- Update notes in the API
- Delete notes from the API

## Features

- **GET /**: Welcome message
- **GET /notes**: Retrieve all notes
- **GET /notes/{id}**: Retrieve a note by ID
- **POST /notes**: Add a new note
- **PUT /notes/{id}**: Update an existing note
- **DELETE /notes/{id}**: Delete a note by ID

## Requirements

- Node.js v14+
- npm v6+

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/simple-note-api.git
    cd simple-note-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Run the server:

    ```bash
    npm start
    ```

4. The server will start on `http://localhost:3000`.

## Endpoints

### 1. Welcome Message

**GET /**

GET http://localhost:3000/

Response:

```
Hello welcome to note taking API!
```

### 2. Get All Notes
GET /notes

GET http://localhost:3000/notes

Response:

```
{
  "status": "success",
  "data": {
    "notes": [
      {
        "id": "note_id",
        "title": "note_title",
        "tags": ["tag1", "tag2"],
        "body": "note_body",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ]
  }
}
```

### 3. Get Note by ID
GET /notes/{id}

GET http://localhost:3000/notes/{id}

Response:

```
{
  "status": "success",
  "data": {
    "note": {
      "id": "note_id",
      "title": "note_title",
      "tags": ["tag1", "tag2"],
      "body": "note_body",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
}
```

### 4. Add a New Note
POST /notes

POST http://localhost:3000/notes

Content-Type: application/json
```
{
  "title": "note_title",
  "tags": ["tag1", "tag2"],
  "body": "note_body"
}
```

Response:

```
{
  "status": "success",
  "message": "Catatan berhasil ditambahkan",
  "data": {
    "noteId": "note_id"
  }
}
```

### 5. Update an Existing Note
PUT /notes/{id}

PUT http://localhost:3000/notes/{id}

Content-Type: application/json
```
{
  "title": "updated_title",
  "tags": ["updated_tag1", "updated_tag2"],
  "body": "updated_body"
}
```

Response:

```
{
  "status": "success",
  "message": "Catatan berhasil diperbarui"
}
```

### 6. Delete a Note
DELETE /notes/{id}

DELETE http://localhost:3000/notes/{id}

Response:

```
{
  "status": "success",
  "message": "Catatan berhasil dihapus"
}
```

Error Handling
In case of an error, the API will return a JSON response with the appropriate status code and message.

Example of an error response:

```
{
  "status": "error",
  "message": "Internal Server Error"
}
```


File Structure

├── handler.js

├── helper.js

├── notes.json

├── routes.js

└── server.js

handler.js: Contains the handler functions for each endpoint.
helper.js: Contains helper functions for reading and writing notes to a JSON file.
notes.json: The JSON file where notes are stored.
routes.js: Defines the API routes.
server.js: The main server file to start the Hapi.js server.

## How to Run

Make sure you have Node.js and npm installed.
Clone the repository and navigate to the project directory.
Install the dependencies using npm install.
Run the server using npm start.
The API will be available at http://localhost:3000.
