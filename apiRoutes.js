//should contain two routes a GET and POST to /api/friends
var express= require("express");

var app = express();
// Specify the port.
var port = 3000;

//A GET route with the url /api/friends. This will be used to display a JSON of all 
//possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic

app.post("/api/friends", function(req, res){

	var Match = {
		name: "",
		image: "",
		matchDif: 1000
	};

	var userInput = req.body;
	var username = userInput.name;
	var image = userInput.image;
	var score = userInput.scores;

	var totalDif = 0;

	for (var i =0; i <userInput.length; i++){
		console.log(friends[i].name);
		totalDif = 0;

		for (var x = 0; x < 10; x++){
			totalDif += Math.abs(parseInt(usrScores[x]) - parseInt(friends[i].scores[x]));
		}

		//if (totalDif <= Match.fr\

	}
});