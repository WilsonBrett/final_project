(function() {
	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function() {

		this.setLoop = function(len){
			return new Array(len);
		}

		this.phrase = [];
		this.score;		

		this.newGame = function() {
			var phrases = ["Old Spice Girls","Alexander the Great Britain","Baby on Board of Directors","Beauty and the Beast of Burden","Adam's Apple of my Eye"];
			var index = Math.floor(Math.random()*phrases.length);
			this.phrase = phrases[index].toUpperCase().split("");
		}

		this.newGame();

		this.setBoxLetter = function(row, col) {
			var id = (row * 12) + col;
			//console.log('x'); //runs twice for some reason on initialization
			if(this.phrase[id] === " " || !this.phrase[id]) {
				return null;
			} else {
				return this.phrase[id];
			}
		}
		
		this.setClass = function(row, col) {
			var id = (row * 12) + col; //reestabish the id because i don't know how to reference it from the dom
			var myEl = $("div#" + id);

			if(myEl[0].innerText === "'") {
				myEl.removeClass("reveal");
				myEl.removeClass("noletter");
				return "reveal";
			} else if(myEl[0].innerText) {
				myEl.removeClass("reveal");
				myEl.removeClass("noletter");
				return "hasletter";
			} else {
				myEl.removeClass("reveal");
				myEl.removeClass("hasletter");
				return "noletter";
			}
		}

		//data from the database goes back to the serverside index controller which has to then get back to the angular controller?
		/*
		$http({
			method: 'GET',
			URL: '/phrase'
		}).then(function successCallback(response) {
					console.log('success', response.data);
					//this.phrase = JSON.parse(response.data);
		}, function errorCallback(response) {
					//nothing goes here in mikes notes?		
		});
		*/
	});
})();