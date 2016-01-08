(function() {
    'use strict';

    angular
        .module('dashboard.components')
        .controller('FooterController', FooterController);

    /* @ngInject */
    function FooterController(dashboardSettings, dashboardLayout) {
        var vm = this;
        vm.name = dashboardSettings.name;
        vm.copyright = dashboardSettings.copyright;
        vm.layout = dashboardLayout.layout;
        vm.version = dashboardSettings.version;
    }
})();
