const Student = require("../models/Student.model ");

module.exports.studentCotroller = {
  getStudents: function (req, res) {
    Student.find().then((students)=>{
		res.json(students)
	 });
  },

  addStudents: function (req, res) {
    Student.create({
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		age:req.body.age,
	 }).then((students)=>{
		res.json(students)
	 })
  },

  changeStudentById: function (req, res) {
    Student.findByIdAndUpdate(req.params.id,{
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		age:req.body.age,
	 },
	 {new:true}).then((students)=>{
		res.json(students)
	 })
  },
  removeStudent: function (req, res) {
    Student.findByIdAndRemove(req.params.id).then(() => {
      res.json("deleted");
    });
  },
};
