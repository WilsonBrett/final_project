(function() {

	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function($http){
		
		this.setloop = function(len){
			return this.arr = new Array(len);
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

		this.phrase = ['A','B','C','D','E'];	

		this.setPhrase = function(row, col) {
			this.id = (row * 12) + col + 1;
			if(this.id !== 1 && this.id !== 12 && this.id !== 37 && this.id !== 48) {
				if(this.counter <= (this.phrase_len - 1)) {
					//return this.id;
					//this.character = this.phrase[counter];
					//this.counter = this.counter + 1;
					//return this.character;
					return 1;
				}
			}
		};
		
    	this.setLetterID = function(row, col){
			return (row * 12) + col + 1;
		};

		this.hide = function(id){
			return id === 1 | id === 12 | id === 37 | id === 48;
		};
		//get data from database somehow
			//select a phrase by random
			//split the characters in that string into an array
			//name the array so ng-repeat can iterate over it and create many elements on the page
			//return this;
	});

})();