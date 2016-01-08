(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    /* @ngInject */
    function config(dashboardLayoutProvider) {
        dashboardLayoutProvider.setDefaultOption('toolbarSize', 'default');

        dashboardLayoutProvider.setDefaultOption('toolbarShrink', false);

        dashboardLayoutProvider.setDefaultOption('toolbarClass', '');

        dashboardLayoutProvider.setDefaultOption('contentClass', '');

        dashboardLayoutProvider.setDefaultOption('sideMenuSize', 'full');

        dashboardLayoutProvider.setDefaultOption('showToolbar', true);

        dashboardLayoutProvider.setDefaultOption('footer', true);
    }
})();
