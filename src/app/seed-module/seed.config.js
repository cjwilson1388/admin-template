(function() {
    'use strict';

    angular
        .module('seed-module')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, dashboardMenuProvider) {

        $stateProvider
        .state('dashboard.admin-default.seed-page', {
            url: '/seed-module/seed-page',
            templateUrl: 'app/seed-module/seed-page.tmpl.html',
            // set the controller to load for this page
            controller: 'SeedPageController',
            controllerAs: 'vm'
        });

        dashboardMenuProvider.addMenu({
            name: 'Start Module',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Start Page',
                state: 'dashboard.admin-default.seed-page',
                type: 'link'
            }]
        });
    }
})();
