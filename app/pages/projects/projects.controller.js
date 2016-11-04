(function () {

    'use strict';

    var projectsController = function ($scope, $sce) {

        var returnAsTrust = function (str) {
            return $sce.trustAsHtml(str || '');
        };

        $scope.runMasonry = function (last) {
            if (last) {
                setTimeout(function () {
                    $('.grid').masonry({
                        itemSelector: '.grid-item',
                        columnWidth: 360
                    });
                }, 100);
            }
        };



        $scope.projects = [
            {
                name: 'Rikodi (Navativo)',
                description: returnAsTrust('Social service for creation stories, and share it with friends. Add photos, videos, links etc. ' +
                    '<br><b>Technologies:</b> C# MSSQL, AngularJS, Twitter Bootstap<br>' +
                    ' <b>Role: </b> Development front-end part in a team'),
                thumb: '',
                url: ''
            },
            {
                name: 'Evento',
                description: returnAsTrust('Social service. Online booking for different events. Sport events, concert, theater etc.' +
                    '<br><b>Technologies:</b> PHP5, MySQL, AngularJS, Twitter Bootstrap <br>' +
                    '<b>Role:</b> Development front-end part in a team'),
                thumb: 'asset/images/projects/adticket.png',
                url: ''
            },
            {
                name: 'Slots Tournaments',
                description: returnAsTrust('Online game for Facebook and mobile app' +
                    '<br><b>Technologies:</b> PHP5, MySQL, Native JS <br>' +
                    '<b>Role:</b> Development front-end part in a team'),
                thumb: 'asset/images/projects/777.png',
                url: 'https://apps.facebook.com/goodoldtimeslots'
            },
            {
                name: 'Plsplsme',
                description: returnAsTrust('Admin panel for manage mobile app. Manage app items, collect statistics etc.' +
                    '<br><b>Technologies:</b> PHP5, MySQL, AngularJS <br>' +
                    '<b>Role:</b> Development front-end part as solo developer. Architect.'),
                thumb: 'asset/images/projects/plsplsme.png',
                url: 'https://admin.plsplsme.com/#/login'
            }
        ]
    };


    projectsController.$inject = ['$scope', '$sce'];


    angular.module('app.controllers').controller('projectsController', projectsController);

})();