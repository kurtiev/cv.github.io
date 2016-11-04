(function () {

    var appConfig = {
        googleCaptcha: ''
    };

    var config = function () {

    };

    config.$inject = [];

    angular.module('app', [
        // Main
        'app.controllers',
        'app.directives',
        'app.services',
        'app.filters',

        // Thirty part
        'ui.router',
        'ngSanitize'
    ])
        .constant('appConfig', appConfig)
        .config(config)
        .run(function () {

        });

    angular.module('app.controllers', []);
    angular.module('app.services', []);
    angular.module('app.directives', []);
    angular.module('app.filters', []);

})();