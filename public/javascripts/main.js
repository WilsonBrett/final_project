$(function(){

	$.ajax({
		method: "GET",
		url: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js',
		dataType: 'text'
	}).done(function(data){

		console.log(data);			
	});
});