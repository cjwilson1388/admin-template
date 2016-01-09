(function() {
    'use strict';

    angular
        .module('dashboard')
        .run(runFunction);

    /* @ngInject */
    function runFunction($rootScope, $window) {
        // add a class to the body if we are on windows
        if($window.navigator.platform.indexOf('Win') !== -1) {
            $rootScope.bodyClasses = ['os-windows'];
        }
    }
})();
