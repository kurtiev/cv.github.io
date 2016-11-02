(function () {

    'use strict';

    var homeController = function ($state) {
        console.log($state);
    };


    homeController.$inject = ['$state'];


    angular.module('app.controllers').controller('homeController', homeController);

})();