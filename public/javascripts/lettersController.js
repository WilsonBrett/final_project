(function() {

	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function(){

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

		//this.getPhrase = function(){
			//go to the database and fetch a random phrase
			//this.phrase = "";
			/*$http({
				method: 'GET',
				URL: '/phrase'
				}).then(function successCallback(response) {
					console.log('success', response.data);
					this.phrase = JSON.parse(response.data);
					}, function errorCallback(response) {
					
				});*/
			//split the phrase into a new array this.phrase_arr = phrase.split("");
		//};
	});

})();