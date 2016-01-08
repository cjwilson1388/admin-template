(function() {
    'use strict';

    angular
        .module('app')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig(dashboardSettingsProvider, dashboardRouteProvider) {
        var now = new Date();
        // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
        dashboardSettingsProvider.setName('Dashboard');
        dashboardSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' calebjwilson.com');
        dashboardSettingsProvider.setLogo('assets/images/logo.png');
        // set current version of app (shown in footer)
        dashboardSettingsProvider.setVersion('0.0.1');
        // set the document title that appears on the browser tab
        dashboardRouteProvider.setTitle('Dashboard');
        dashboardRouteProvider.setSeparator('|');

    }
})();
