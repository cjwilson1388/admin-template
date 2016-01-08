(function() {
    'use strict';

    angular
        .module('dashboard.components')
        .directive('dashboardMenuItem', dashboardMenuItemDirective);

    /* @ngInject */
    function dashboardMenuItemDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            require: '^dashboardMenu',
            scope: {
                item: '='
            },
            // replace: true,
            template: '<div ng-include="::dashboardMenuItem.item.template"></div>',
            controller: dashboardMenuItemController,
            controllerAs: 'dashboardMenuItem',
            bindToController: true
        };
        return directive;
    }

    /* @ngInject */
    function dashboardMenuItemController($scope, $mdSidenav, $state, $filter, dashboardBreadcrumbsService) {
        var dashboardMenuItem = this;
        // load a template for this directive based on the type ( link | dropdown )
        dashboardMenuItem.item.template = 'app/dashboard/components/menu/menu-item-' + dashboardMenuItem.item.type + '.tmpl.html';

        switch(dashboardMenuItem.item.type) {
            case 'dropdown':
                // if we have kids reorder them by priority
                dashboardMenuItem.item.children = $filter('orderBy')(dashboardMenuItem.item.children, 'priority');
                dashboardMenuItem.toggleDropdownMenu = toggleDropdownMenu;
                // add a check for open event
                $scope.$on('toggleDropdownMenu', function(event, item, open) {
                    // if this is the item we are looking for
                    if(dashboardMenuItem.item === item) {
                        dashboardMenuItem.item.open = open;
                    }
                    else {
                        dashboardMenuItem.item.open = false;
                    }
                });
                // this event is emitted up the tree to open parent menus
                $scope.$on('openParents', function() {
                    // openParents event so open the parent item
                    dashboardMenuItem.item.open = true;
                    // also add this to the breadcrumbs
                    dashboardBreadcrumbsService.addCrumb(dashboardMenuItem.item);
                });
                break;
            case 'link':
                dashboardMenuItem.openLink = openLink;

                // on init check if this is current menu
                checkItemActive($state.current.name, $state.params);

                $scope.$on('$stateChangeSuccess', function(event, toState, toParams) {
                    checkItemActive(toState.name, toParams);
                });
                break;
        }

        function checkItemActive() {
            // first check if the state is the same
            dashboardMenuItem.item.active = $state.includes(dashboardMenuItem.item.state, dashboardMenuItem.item.params);
            // if we are now the active item reset the breadcrumbs and open all parent dropdown items
            if(dashboardMenuItem.item.active) {
                dashboardBreadcrumbsService.reset();
                dashboardBreadcrumbsService.addCrumb(dashboardMenuItem.item);
                $scope.$emit('openParents');
            }
        }

        function toggleDropdownMenu() {
            $scope.$parent.$parent.$broadcast('toggleDropdownMenu', dashboardMenuItem.item, !dashboardMenuItem.item.open);
        }

        function openLink() {
            var params = angular.isUndefined(dashboardMenuItem.item.params) ? {} : dashboardMenuItem.item.params;
            $state.go(dashboardMenuItem.item.state, params);
            dashboardMenuItem.item.active = true;
            $mdSidenav('left').close();
        }
    }
})();
