# Assignment 1: Student-Course Application API

## Project Overview
This project is a Student-Course Application API that allows users to manage students and courses. It supports functionalities like retrieving all students or courses, retrieving a 
student by ID, and adding a new course.

## Features
- Retrieve a list of all students and courses.
- Retrieve a specific student by their unique ID.
- Add a new course with details like ID, name, department, and status (open/closed).

## Technologies Used
- **Node.js** with **Express** for creating the server and API endpoints.
- **Git** and **GitHub** for version control.
- **Postman** or **curl** for testing API endpoints.

## API Endpoints
### Students
- **GET** `/students` - Retrieve all students.
- **GET** `/students/:id` - Retrieve a student by their ID.
  
### Courses
- **GET** `/courses` - Retrieve all courses.
- **POST** `/courses` - Add a new course (example JSON below):

  ```json
  {
      "id": 4,
      "name": "Physics",
      "department": "Science",
      "isOpen": true
  }
