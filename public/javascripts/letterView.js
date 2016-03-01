(function(){

	var app = angular.module('BeforeAndAfterApp');

	app.directive('letter',function(){
		var directive = {};
		directive.restrict = 'E';
		directive.replace = true;
		directive.templateUrl = '_letterView.html';
		directive.scope = {phraseLetter: '@'};
		return directive;
	});
})();