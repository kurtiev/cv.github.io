(function () {

    'use strict';

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");


        $stateProvider
            .state('home', {
                controller: 'homeController',
                url: "/home",
                templateUrl: "app/pages/home/template.html"
            });

    }

    angular.module('app').config(config);

})();