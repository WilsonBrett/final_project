(function() {

	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function(){
		
		this.setloop = function(len){
			return this.arr = new Array(len);
		};

		this.setPhrase = function(indx){
			this.boxNum = indx;
			this.phrase = ['A','B','C','D','E'];
			//return a letter from the phrase to set the value of the cell
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