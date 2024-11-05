const express = require('express');
const app = express();
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Student-Course Application API!</h1>
        <p>Use the following API endpoints to interact with the application:</p>
        
        <h2>Endpoints</h2>
        <ul>
            <li><strong>Retrieve all students:</strong> 
                <br>GET <code>http://localhost:3000/students</code>
                <br>Example: <a href="http://localhost:3000/students">http://localhost:3000/students</a>
            </li>
            
            <li><strong>Retrieve a student by ID:</strong> 
                <br>GET <code>http://localhost:3000/students/:id</code>
                <br>Example: <a href="http://localhost:3000/students/1">http://localhost:3000/students/1</a>
            </li>
            
            <li><strong>Retrieve all courses:</strong> 
                <br>GET <code>http://localhost:3000/courses</code>
                <br>Example: <a href="http://localhost:3000/courses">http://localhost:3000/courses</a>
            </li>
            
            <li><strong>Add a new course:</strong> 
                <br>POST <code>http://localhost:3000/courses</code>
                <br>Example JSON Body:
                <pre>{
    "id": 4,
    "name": "Physics",
    "department": "Science",
    "isOpen": true
}</pre>
            </li>
        </ul>

        <h2>Instructions</h2>
        <p>To test POST requests, use an API client like <strong>Postman</strong> or <strong>curl</strong> to send JSON data in the request body.</p>
        <p>Use GET requests in your browser to view data directly by navigating to the URLs above.</p>
        
        <h2>Using Postman to Add a Course</h2>
        <ol>
            <li>Open Postman and click <strong>New Request</strong>.</li>
            <li>Set the request type to <strong>POST</strong>.</li>
            <li>Enter the URL: <code>http://localhost:3000/courses</code></li>
            <li>Go to the <strong>Body</strong> tab, select <strong>raw</strong>, and choose <strong>JSON</strong> as the format.</li>
            <li>Enter the JSON data for the new course in the text area. For example:
                <pre>{
    "id": 4,
    "name": "Physics",
    "department": "Science",
    "isOpen": true
}</pre>
            </li>
            <li>Click <strong>Send</strong> to submit the request. You should receive a response confirming the course was added successfully.</li>
        </ol>

        <h2>Optional: Enabling Pretty-print</h2>
        <p>If you'd like to see the data in an easy-to-read format, look for the "Pretty-print" option in your browser. To enable it:</p>
        <ul>
            <li>Click on the "Pretty-print" checkbox, often located in the browser's settings panel when viewing raw JSON data.</li>
        </ul>
    `);
});

// Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});