(function() {

	var app = angular.module('BeforeAndAfterApp');

	app.controller('LettersController', function(){

		this.setLoop = function(len){
			return new Array(len);
		};

		var phrase = ['A','B','C','D','E'];
		var counter = 0;

		this.setBoxLetter = function(row, col) {
			//console.log('hey');
			var id = (row * 12) + col;
			return phrase[id] || null;
		};

		this.hasLetter = function(val){
			return val ? true:false ;
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