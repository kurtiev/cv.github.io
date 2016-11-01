(function () {

    'use strict';

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/projects");


        $stateProvider
            .state('projects', {
                url: "/projects",
                template: "<projects></projects>"
            });

    }

    angular.module('app').config(config);

})();