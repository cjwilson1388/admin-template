(function() {
    'use strict';

    angular
        .module('dashboard.components')
        .controller('MenuController', MenuController);

    /* @ngInject */
    function MenuController(dashboardSettings, dashboardLayout) {
        var vm = this;
        vm.layout = dashboardLayout.layout;
        vm.sidebarInfo = {
            appName: dashboardSettings.name,
            appLogo: dashboardSettings.logo
        };
        vm.toggleIconMenu = toggleIconMenu;

        ////////////
        function toggleIconMenu() {
            var menu = vm.layout.sideMenuSize === 'icon' ? 'full' : 'icon';
            dashboardLayout.setOption('sideMenuSize', menu);
        }
    }
})();
