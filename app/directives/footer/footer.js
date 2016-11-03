(function () {

    'use strict';

    var link = function (scope, element, attrs) {

    };

    var footer = function () {
        return {
            templateUrl: 'app/directives/footer/template.html',
            restrict: 'E',
            link: link
        };
    };


    angular.module('app.directives').directive('footerFo', footer);

})();