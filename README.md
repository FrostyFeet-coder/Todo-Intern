# Todo List Application

A Todo List application built with React, Node.js, Express, and MongoDB. This project uses Webpack to bundle the frontend.

## Project Structure

todo-app/
├── backend/
│ ├── models/
│ │ └── Task.js
│ ├── routes/
│ │ └── tasks.js
│ ├── .env
│ ├── server.js
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ ├── TaskForm.js
│ │ │ ├── TaskList.js
│ │ ├── App.js
│ │ ├── index.js
│ ├── package.json
├── package.json
└── README.md


## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FrostyFeet-coder/todo-app.git
   cd todo-app
Install backend dependencies:
cd backend
npm install

Install frontend dependencies
cd ../frontend
npm install

Configuration
Create a .env file in the backend directory with the following content:
MONGO_URI=mongodb://localhost:27017/todo-app
PORT=5000

Backend
Start the backend server using nodemon:
cd backend
npx nodemon server.js
The backend server will run on http://localhost:5000.

Frontend
Start the frontend development server:
cd frontend
npm start
The frontend server will run on http://localhost:5000.


