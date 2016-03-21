(function() {
	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function(){

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

		this.setLoop = function(len){
			return new Array(len);
		};

		this.phrase = [];
		
		this.newGame = function() {
			var phrases = ["Phrase A","Phrase AA","Phrase AAA","Phrase AAAA"];
			var index = Math.floor(Math.random()*phrases.length);
			this.phrase = phrases[index].toUpperCase().split("");
			console.log(this.phrase);
		}

		this.newGame();

		this.setBoxLetter = function(row, col) {
			var id = (row * 12) + col;
			//console.log(id); //runs twice for some reason on initialization
			if(this.phrase[id] === " " || !this.phrase[id]){
				return null;
			} else {
				return this.phrase[id];
			}
		};
		
		this.setClass = function(row, col) {
			var id = (row * 12) + col;
			var myEl = angular.element(document.querySelector('#' + id));

			if(myEl.hasClass('reveal')) {
				console.log('ID: ' + id);
				//remove the reveal class for new game setup
			} else {
				//set the 
			}
			//console.log('row: ' + row + ' => col: ' + col);
			//letrs.setBoxLetter($parent.$index,$index) ? 'hasletter':'noletter'
			//if the setboxletter function returns a value then the class becomes 'hasletter'
			//if the setboxletter function does not return a value then the class becomes 'noletter'
			//if the reveal button is clicked or if the letter is matched the class becomes 'reveal'
			//if the new game button is clicked and the reveal class is set then it needs to be removed first
		}

	});

})();