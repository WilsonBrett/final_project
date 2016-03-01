(function() {

	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function(){
		
		this.setloop = function(len){
			return this.arr = new Array(len);
		};
    	
		//get data from database somehow
			//select a phrase by random
			//split the characters in that string into an array
			//name the array so ng-repeat can iterate over it and create many elements on the page
			//return this;
	});

})();