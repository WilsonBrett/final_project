(function() {

	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function(){

		var letters = this;
		var count = 0;
		letters.arr = function() {
			count = count + 1;
			console.log(count);
			//return letters.cells = [1,2,3,4,5,6,7,8,9,10,11,12];
		};

		letters.setRows = function(len){
			var arr = new Array(len);
			return arr;
		};

		letters.setCells = function(len){
			var arr = new Array(len);
			return arr;
		};

		letters.setPhrase = function(cell){
			//this.phrase = ['A','B','C','D','E'];
			console.log(cell);
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