(function() {
    'use strict';

    angular
        .module('dashboard.components')
        .controller('DefaultToolbarController', DefaultToolbarController);

    /* @ngInject */
    function DefaultToolbarController($scope, $rootScope, $mdMedia, $state, $element, $filter, $mdUtil, $mdSidenav, $mdToast, $timeout, $document, dashboardBreadcrumbsService, dashboardSettings, dashboardLayout) {
        var vm = this;
        vm.breadcrumbs = dashboardBreadcrumbsService.breadcrumbs;
        vm.emailNew = false;
        vm.openSideNav = openSideNav;
        vm.hideMenuButton = hideMenuButton;
        vm.toggleNotificationsTab = toggleNotificationsTab;
        vm.isFullScreen = false;
        vm.fullScreenIcon = 'zmdi zmdi-fullscreen';
        vm.toggleFullScreen = toggleFullScreen;

        // initToolbar();

        ////////////////

        function openSideNav(navID) {
            $mdUtil.debounce(function(){
                $mdSidenav(navID).toggle();
            }, 300)();
        }


        function hideMenuButton() {
            return dashboardLayout.layout.sideMenuSize !== 'hidden' && $mdMedia('gt-sm');
        }

        function toggleNotificationsTab(tab) {
            $rootScope.$broadcast('dashboardSwitchNotificationTab', tab);
            vm.openSideNav('notifications');
        }

        function toggleFullScreen() {
            vm.isFullScreen = !vm.isFullScreen;
            vm.fullScreenIcon = vm.isFullScreen ? 'zmdi zmdi-fullscreen-exit':'zmdi zmdi-fullscreen';
            // more info here: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
            var doc = $document[0];
            if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement ) {
                if (doc.documentElement.requestFullscreen) {
                    doc.documentElement.requestFullscreen();
                } else if (doc.documentElement.msRequestFullscreen) {
                    doc.documentElement.msRequestFullscreen();
                } else if (doc.documentElement.mozRequestFullScreen) {
                    doc.documentElement.mozRequestFullScreen();
                } else if (doc.documentElement.webkitRequestFullscreen) {
                    doc.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                } else if (doc.msExitFullscreen) {
                    doc.msExitFullscreen();
                } else if (doc.mozCancelFullScreen) {
                    doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) {
                    doc.webkitExitFullscreen();
                }
            }
        }

        $scope.$on('newMailNotification', function(){
            vm.emailNew = true;
        });
    }
})();
