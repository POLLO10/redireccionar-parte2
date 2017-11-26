var myApp= angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

             .state('login', {
            	url: '/login',
            	templateUrl: '../paginas/login.html'
        })

        .state('biografia', {
        	url: '/biografia',
            	templateUrl: '../paginas/biografia.html'
        	});

});