(function () {

    'use strict';

    var link = function (scope, element, attrs) {
    };

    var navigation = function () {
        return {
            templateUrl: 'app/directives/navigation/template.html',
            restrict: 'E',
            link: link
        };
    };


    angular.module('app.directives').directive('navigation', navigation);

})();