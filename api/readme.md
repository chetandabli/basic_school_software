# Result Software

This is a simple Result Software application built using the MERN stack (HTML, CSS, JavaScript, MongoDB, Express.js, Node.js). The application allows you to add students, add their marks, and view reports.

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/chetandabli/basic_school_software.git
   ```

2. Install dependencies for backend:
   ```
   cd ./api/
   npm install
   ```

3. Provide the MongoDB URI:

   Before running the application, make sure you have MongoDB installed and running. In the backend `index.js` file, replace `'PLEASE_ENTER_MONGODB_URI'` with your actual MongoDB connection string.

## Running the Application

To start the backend and frontend, run the following command from the root of the project:

```
node index.js
```

The backend server will run on `http://localhost:5000/api`, and the frontend will run on `http://localhost:5000`.

## Usage

1. Access the application by navigating to `http://localhost:5000` in your web browser.

2. Use the "Add Student" form to add new students.

3. Use the "Add Marks" button beside each student's name to add marks for that student.

4. The "Students List" and "Marks List" sections will display the list of students and their marks.

## Technologies Used

- MongoDB: A NoSQL database used for storing students' and marks data.
- Express.js: A backend web framework for Node.js.
- Node.js: A JavaScript runtime environment used for the backend server.
- HTML, CSS and JavaScript: For creating the frontend user interface.

