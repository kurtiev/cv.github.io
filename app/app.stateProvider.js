(function () {

    'use strict';

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");


        $stateProvider
            .state('home', {
                controller: 'homeController',
                url: "/home",
                templateUrl: "app/pages/home/view.html"
            })
            .state('projects', {
                controller: 'projectsController',
                url: "/projects",
                templateUrl: "app/pages/projects/view.html"
            })
            .state('contact', {
                controller: 'contactController',
                url: "/contact",
                templateUrl: "app/pages/contact/view.html"
            })

    }

    angular.module('app').config(config);

})();