const express  = require("express"),
      app      = express(),
      port     = process.env.PORT || 8080,
      Project  = require("./models/project"),
      seedDB = require("./projectseeds"),
      DBurl    = process.env.DATABASEURL || "mongodb://localhost/resume_projects",
      mongoose = require("mongoose");

console.log(port);
// DATABASE
mongoose.connect(DBurl);


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//seedDB();

app.get("/", function(req, res){
	res.render("about");
});

app.get("/projects/", function(req, res) {
	Project.find({}, function(err, projects) {
		if (err) {
			console.log(err);
			res.redirect("back");
		} else {
			res.render("projects/index", {projects: projects});
		}
	})
});

app.listen(port, function() {
	console.log("Server running on https://localhost:" + port);
})