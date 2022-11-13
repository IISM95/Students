const { Router } = require("express");
const { studentCotroller } = require("../controllers/students.controller");
const router = Router();

router.get("/student", studentCotroller.getStudents);
router.post("/student", studentCotroller.addStudents);
router.patch("/student/:id", studentCotroller.changeStudentById);
router.delete("/student/:id", studentCotroller.removeStudent);
module.exports = router;
