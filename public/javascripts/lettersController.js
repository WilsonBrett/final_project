(function() {
	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function($http){

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
		this.setID = function(row,col) {
			return (row * 12) + col;
		}

		function generatePhrase(){
			var phrases = ["aussy aussy aussy","will work for nutella","tom brady bunch","sean shannon sharpe", "Sea Salt n Peppah"];
			var index = Math.floor(Math.random()*phrases.length);
			var new_phrase = phrases[index].toUpperCase().split("");
			return new_phrase;
		}

		this.phrase = generatePhrase();

		this.setBoxLetter = function(row, col) {
			var id = (row * 12) + col;
			if(this.phrase[id] === " " || !this.phrase[id]){
				return null;
			} else {
				return this.phrase[id];
			}
		};

		this.getPhrase = function(){
			var anything = generatePhrase();			

		}
	});

})();