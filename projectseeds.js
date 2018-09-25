const mongoose = require("mongoose"),
      Project  = require("./models/project");

var data = [
	{
		name: "Music Flyer",
		image: "/images/musicflyer.png",
		description: "A web app created to help share new bands or artists with friends. Created to learn more about front end development and building a web app with a team. I learned how the front end connects to the back end and how templates work. A user can search for any artist on the landing page and the app will generate a flyer of that artist that contains their picture, a playlist of their top tracks, and three related artists. Later, I added web vr functionality with Aframe that allowed users to view the artists' picture along with social media links in VR.",
		github: "https://github.com/ryanaveo/music-flyer-VR",
		skills: []
	},
	{
		name: "Fit Your Genes",
		image: "/images/fityourgenes.png",
		description: "A web app that generates exercise/dietary suggestions based on user’s genome sequence. Created during SD Hacks 2017. This was my first exposure back end development, and I found it fun! I used flask to render HTML files and create the routes. I also learned how to make API calls with the Genome Link API to get relevant information to a user's health based on their genome sequence. The hackathon community and my team was overwhelmingly supportive whenever I had a question about the tools that we were using and it made learning back end development even more enjoyable. The hardest part was understanding how authentication worked. However after digging through the documentation of the API and talking it over with our teammates, we managed to get it working before presenting.",
		github: "https://github.com/michellewoohoo/SDHacks",
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