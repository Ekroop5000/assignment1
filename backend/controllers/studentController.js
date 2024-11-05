const students = require('../data/studentData');

const getAllStudents = (req, res) => res.json(students);

const getStudentById = (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student) {
        // Calculate average grades here if needed
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
};

module.exports = { getAllStudents, getStudentById };