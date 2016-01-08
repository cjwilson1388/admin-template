(function() {
    'use strict';

    angular
        .module('sampleModule')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider) {

        $stateProvider
        .state('dashboard.admin-default.sample-page', {
            url: '/sample-module/sample-page',
            templateUrl: 'app/sample-module/sample-page.tmpl.html',
            // set the controller to load for this page
            controller: 'SamplePageController',
            controllerAs: 'vm'
        });


    }
})();
