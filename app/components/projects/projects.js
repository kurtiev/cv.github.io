(function () {

    'use strict';

    var projectsController = function () {
        console.log('projectsController');
    };

    var component = {
        template: 'template.html',
        controller: projectsController
    };

    angular.module('app').component('projects', component);

});