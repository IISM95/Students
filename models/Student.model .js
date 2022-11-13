const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});
const Student = mongoose.model("Students", studentSchema);
module.exports = Student;
