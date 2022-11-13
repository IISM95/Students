const express = require('express');
const app = express();
app.use(express.json()); 
const mongoose = require("mongoose");     

app.use(require('./routers'))




mongoose.connect(
	"mongodb+srv://Islam:I2012051@cluster0.qhou4ot.mongodb.net/student?retryWrites=true&w=majority",
	() => {
	  console.log("conectid");
	  app.listen(3000, function () {
		 console.log("server has been started");
	  });
	}
 );
