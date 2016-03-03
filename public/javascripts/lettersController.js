(function() {
	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function(){

		//data from the database goes back to the serverside index controller which has to then get back to the angular controller?
		$http({
			method: 'GET',
			URL: '/phrase'
		}).then(function successCallback(response) {
					console.log('success', response.data);
					//this.phrase = JSON.parse(response.data);
				}, function errorCallback(response) {
					//nothing goes here in mikes notes?		
			});

		this.setLoop = function(len){
			return new Array(len);
		};
		this.setID = function(row,col) {
			return (row * 12) + col;
		}
		var phrase = ['B','O','O','K','K','E','E','P','E','R'];

		this.setBoxLetter = function(row, col) {
			var id = (row * 12) + col;
			return phrase[id] || null;
		};

		this.getPhrases = function(){
			//gets phrases from the DB at page load


			//split the phrase into a new array this.phrase_arr = phrase.split("");
		//};
	});

})();