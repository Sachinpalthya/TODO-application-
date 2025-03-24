 build a TODO application using Prisma, JavaScript, and Node.js, follow these steps:

Tech Stack:
>>>Backend: Node.js, Express.js, Prisma ORM
>>>Database: SQLite (for simplicity), PostgreSQL/MySQL (for production)
>>>Frontend : React, but for now, we’ll focus on backend APIs.
>>>Validation: express-validator
>>>API Testing: Postman
>>>Steps to Build the TODO App:
1.Setup Node.js Project
2.Install Dependencies
3.Setup Prisma ORM
4.Create Database Schema
5.Build Express.js Server
6.Create API Routes (CRUD for TODOs)
7.Add Input Validation
8.Test API with Postman

Packages Used:
>>>express: Backend framework
>>>prisma: ORM for database handling
>>>@prisma/client: Prisma client for database interaction
>>>sqlite3: Lightweight database
>>>cors: Enables cross-origin requests
>>>body-parser: Parses incoming request bodies
>>>express-validator: Validates request data

TO Run Prisma migration:
>>><npx prisma migrate dev --name init> we use this command to run the prizma.

To Generate Prisma client:

>>><npx prisma generate>

To Run the server:

>>><node server.js>

To Deploy the Backend

>>>Render (Free & Easy): https://render.com


To Run migration:
>>><npx prisma migrate deploy>

Steps to Integrate Next.js Frontend
>>>1.Setup Next.js Project

>>>2.Install Dependencies

>>>3.Create UI Components

>>>4.Connect API Endpoints

>>>5.Add CRUD Functionality

>>>6.Run & Test Frontend


Setup Next.js Project
Navigate to your working directory and create a Next.js app:

<npx create-next-app@latest todo-frontend>
<cd todo-frontend> using this folders we can add the directory of the frontend folder and we can install the packages in it.

To Install dependensies we use this command 
>>><npm install axios @mui/material @emotion/react @emotion/styled react-icons>


Dependencies Used
>>>axios: To make API calls

>>>@mui/material: UI components

>>>@emotion/react & @emotion/styled: Styling for MUI components

>>>react-icons: Icons for buttons

To Start/run  the frontend:

>>><npm run dev>


