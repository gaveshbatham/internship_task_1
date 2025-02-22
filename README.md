
# Internship Task 1 - Backend

This repository contains the backend implementation for the internship task, developed using **Node.js** and **PostgreSQL**. The backend is designed to dynamically fetch notifications and display them to users, as outlined in the task requirements.

## Project Overview

The project serves as the backend solution for the screens provided in the assessment task. It uses Node.js for building the RESTful API and PostgreSQL as the database to store and manage notifications. The backend provides endpoints to retrieve notifications, which are then shown to the user.

## Technologies Used

- **Node.js**: JavaScript runtime used to build the server-side application.
- **PostgreSQL**: Relational database used to store notification data.
- **Express.js**: Web framework for Node.js to create APIs.
- **Sequelize**: ORM for managing PostgreSQL database interactions.

## Features

- **Notification Management**: Provides APIs to fetch notifications from the PostgreSQL database.
- **Dynamic Fetching**: Notifications are dynamically fetched from the database and presented to users.
- **API Endpoints**: The backend exposes multiple API endpoints for interacting with the notification data.

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 14.x or above
- **PostgreSQL**: Version 12.x or above

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/gaveshbatham/internship_task_1.git
   cd internship_task_1
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up your PostgreSQL database. You can configure the database by creating a `.env` file in the root of the project:

   ```bash
   DATABASE_URL=postgres://username:password@localhost:5432/your_database_name
   ```

4. Run the migrations to set up the database schema:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the application:

   ```bash
   npm start
   ```

6. Your application should now be running on `http://localhost:5000`.



For testing and documentation, you can use [Postman]([https://www.postman.com](https://www.postman.com/be1477/workspace/task-1-intern/request/41337251-abc1218d-0c52-4e41-a84c-3fe67f75c0f9?action=share&creator=41337251&ctx=documentation&active-environment=41337251-74c23913-bf30-4693-8dfe-d2da078f8ef0)) with the link provided in the submission.

## Deployment

The backend has been deployed and can be accessed at:

- **Hosted URL**: [https://internship-task-1-5iu4.onrender.com](https://internship-task-1-5iu4.onrender.com)


## Acknowledgments

- Node.js, Express, and Sequelize documentation for helping build the backend architecture.
- PostgreSQL documentation for setting up the database.

---

