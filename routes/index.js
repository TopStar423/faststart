// const studentController = require('../controllers').student;
const validateToken = require('../middleware/authorization').validateToken;

module.exports = (app) => {
    // app.post('/api/student/all', validateToken, studentController.getAllStudents);
    // app.post('/api/student/:id', validateToken, studentController.getStudent);
};
