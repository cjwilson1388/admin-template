(function() {
    'use strict';

    angular
        .module('dashboard.components')
        .directive('dashboardMenu', dashboardMenuDirective);

    /* @ngInject */
    function dashboardMenuDirective($location, $mdTheming, dashboardTheming) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            template: '<md-content><dashboard-menu-item ng-repeat="item in dashboardMenuController.menu | orderBy:\'priority\'" item="::item"></dashboard-menu-item></md-content>',
            scope: {},
            controller: dashboardMenuController,
            controllerAs: 'dashboardMenuController',
            link: link
        };
        return directive;

        function link($scope, $element) {
            $mdTheming($element);
            var $mdTheme = $element.controller('mdTheme'); //eslint-disable-line

            var menuColor = dashboardTheming.getThemeHue($mdTheme.$mdTheme, 'primary', 'default');
            var menuColorRGBA = dashboardTheming.rgba(menuColor.value);
            $element.css({ 'background-color': menuColorRGBA });
            $element.children('md-content').css({ 'background-color': menuColorRGBA });
        }
    }

    /* @ngInject */
    function dashboardMenuController(dashboardMenu) {
        var dashboardMenuController = this;
        // get the menu and order it
        dashboardMenuController.menu = dashboardMenu.menu;
    }
})();
