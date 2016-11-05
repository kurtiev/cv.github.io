(function () {

    'use strict';

    var projectsController = function ($scope, $sce, $timeout) {

        var returnAsTrust = function (str) {
            return $sce.trustAsHtml(str || '');
        };

        $scope.runMasonry = function (last) {
            $timeout(function () {
                $('.grid').masonry({
                    itemSelector: '.grid-item',
                    columnWidth: 360
                });
            }, 100);
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
            },
            {
                name: 'TransparencyСentral',
                description: returnAsTrust('Alternative service for <a href="https://www.kickstarter.com/" target="_blank">kickstarter</a>' +
                    '<br><b>Technologies:</b> PHP5, MySQL, AngularJS <br>' +
                    '<b>Role:</b> Development front-end part as solo developer. Architect.'),
                thumb: 'asset/images/projects/TransparencyCentral.svg',
                url: 'http://transparencycentral.com/'
            },
            {
                name: 'OffrBox',
                description: returnAsTrust('Buy and Sell Your Residential Investment Properties Online.' +
                    '<br><b>Technologies:</b> NodeJS, MySQL, AngularJS <br>' +
                    '<b>Role:</b> Development front-end part for main site in a team. Development front-end part for Admin Panel, architect.'),
                thumb: 'asset/images/projects/offrbox.png',
                url: 'https://offrbox.com/'
            },
            {
                name: 'CSI CRM',
                description: returnAsTrust('CSI is a proud member of  <a href="http://www.moving.org/" target="_blank">AMSA</a>' +
                    '<br><b>Technologies:</b> NodeJS, MySQL, AngularJS <br>' +
                    '<b>Role:</b> Development front-end part for Customers, Carriers and Admin Panel, architect.'),
                thumb: 'asset/images/projects/csi.png',
                url: 'http://csipros.org/'
            },
            {
                name: 'Other',
                description: returnAsTrust('<b>Technologies:</b> PHP, MySQL, AngularJS etc.<br>' +
                    '<b>Role:</b> Development of different short-term projects '),
                thumb: '',
                url: ''
            }
        ]
    };


    projectsController.$inject = ['$scope', '$sce', '$timeout'];


    angular.module('app.controllers').controller('projectsController', projectsController);

})();