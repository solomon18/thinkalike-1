(function(){
	// want to add another module called helpermodule1?
	// var app = angular.module('thinkalike', [helpermodule1] );

	var app = angular.module('thinkalike', [ ]);
	// execute this when ProjectController is called
	app.controller('ProjectController', function($scope){
		this.projects = projects;
		this.search = "";
	});

	// dummy data for now
	// must be populated from the database
	var projects = [
	{
		"projectId": 0,
		"title": 'Think Alike',
		"description": 'Project Collaboration Website',
		"owner-name": 'Derek',
		"progress": 'panel-warning'
	} , {
		"projectId": 1,
		"title": 'HTML To Go',
		"description": 'Quick HTML generator using UX/UI designs',
		"owner-name": 'John Richards',
		"progress": 'panel-success'
	}, {
		"projectId": 2,
		"title": 'Housing',
		"description": 'Volunteer: Housing Mobile App using Angular.JS',
		"owner-name": 'Jose Valdez',
		"progress": 'panel-danger'
	}];


	// // ROUTES
	// app.config(function ($routeProvider) {
	// 	$routeProvider
	// 		.when('/',	//when at root, go to View1.html
	// 		{
	// 			controller: 'ProjectController',
	// 			templateUrl: 'View1.html'
	// 		})
	// 		.when('/partial2',
	// 		{
	// 			controller: 'ProjectController',
	// 			templateUrl: 'View2.html'
	// 		})
	// 		.otherwise({ redirectTo: '/' });
	// });
	

	app.controller('TeamController', function($scope) {
		this.projteam = projteam;
	});

	var projteam = [
	{
		"userId": 0,
		"firstname": 'Brian',
		"lastname": 'Quigley',
		"email": 'bquigley@gmail.com',
		"position": 'Software Engineer'
	} , {
		"userId": 1,
		"firstname": 'Norman',
		"lastname": 'Thansen',
		"email": 'nthansen@gmail.com',
		"position": 'Software Engineer'
	} , {
		"userId": 2,
		"firstname": 'Derek',
		"lastname": 'Willms',
		"email": 'cafeeine206@gmail.com',
		"position": 'Software Engineer'
	}];


}) ();



