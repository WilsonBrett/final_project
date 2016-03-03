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

		this.phrase = ['B','O','O','K','K','E','E','P','E','R'];

		this.setBoxLetter = function(row, col) {
			var id = (row * 12) + col;
			return this.phrase[id] || null;
		};

		this.getPhrase = function(){
			var phrases = ["I LOVE TEXAS","GA ROCKS BALLS","TOM BRADY RULES","PEYTON MANNING SUCKS"];
			var index = Math.floor(Math.random()*4);
			var new_phrase = phrases[index].split("");
			this.phrase.pop();
			//console.log(this.phrase);
			console.log(this.phrase);
		}
	});

})();