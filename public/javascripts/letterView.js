(function(){

	var app = angular.module('BeforeAndAfterApp');

	app.directive('letter',function(){
		var directive = {};
		directive.restrict = 'E';
		directive.replace = true;
		directive.templateUrl = '/javascripts/templates/_letterView.html';
		directive.scope = {phraseletter: '@', boxNum: '@'};
		return directive;
	});
})();