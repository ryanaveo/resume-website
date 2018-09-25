const mongoose = require("mongoose"),
      Project  = require("./models/project");

var data = [
	{
		name: "Music Flyer",
		image: "/images/musicflyer.png",
		description: "A web app created to help share new bands or artists with friends. Used this app to learn more about front end development and using API's and frameworks.",
		github: "https://github.com/ryanaveo/music-flyer-VR",
		skills: []
	},
	{
		name: "Fit Your Genes",
		image: "/images/fityourgenes.png",
		description: "A web app that generates exercise/dietary suggestions based on user’s genome sequence. Created during SD Hacks 2017. This was my first exposure back end development, and I found it fun!",
		github: "https://github.com/ryanaveo/music-flyer-VR",
		skills: []
	}
]

function seedDB() {
	// remove all projects
	Project.remove({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log("removed projects");
		data.forEach(function(seed){
			Project.create(seed, function(err, project) {
				if (err) {
					console.log(err);
				} else {
					console.log("added a project");
				}
			})
		});
	})
}

module.exports = seedDB