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
	},
	{
		name: "Sudoku",
		image: "/images/coding.png",
		description: "My first personal project. I built this from the ground up with a friend using object oriented programming and test-driven development. I applied concepts such as unit testing which I didn't learn in class until next quarter which proved that personal projects are just as important as course projects in learning CS fundamentals. I also learned the power of inheritance. I struggled in adding the undo functionality to the game. How could I store the previous moves? I realized I needed separate objects for the different moves of the game: add, remove, and change. I further refactored the code to have them all inherit from a base Action class that stored the cell of the move. Each child class then had its own definition for the new number and the old number. For example, in add, the new number would be given by the player and the old number is 0; this is the opposite in remove. Keeping all of this information in an object helped to store them in array if the player wished to undo all of the moves.", 
		github: "https://github.com/ryanaveo/sudoku",
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