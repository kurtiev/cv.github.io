(function () {

    'use strict';

    var conts = {};

    angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.services',
        'app.filters',

        'ui.router'
    ])
        .constant(conts)
        .run(function () {
            console.log('run')
        });

    angular.module('app.controllers', []);
    angular.module('app.services', []);
    angular.module('app.directives', []);
    angular.module('app.filters', []);

})();