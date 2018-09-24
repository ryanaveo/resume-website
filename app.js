const express  = require("express"),
      app      = express(),
      port     = process.env.PORT || 8080,
      mongoose = require("mongoose");

// DATABASE
mongoose.connect("mongodb://localhost/resume_projects");


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("landing");
});

app.listen(port, function() {
	console.log("Server running on https://localhost:" + port);
})