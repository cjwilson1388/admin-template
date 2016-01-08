(function() {
    'use strict';

    angular
        .module('dashboard')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('dashboard', {
            abstract: true,
            templateUrl: 'app/dashboard/layouts/default/default.tmpl.html',
            controller: 'DefaultLayoutController',
            controllerAs: 'layoutController'
        })
        .state('dashboard.admin-default', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/dashboard/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                toolbar: {
                    templateUrl: 'app/dashboard/components/toolbars/toolbar.tmpl.html',
                    controller: 'DefaultToolbarController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div id="admin-panel-content-view" class="{{layout.innerContentClass}}" flex ui-view></div>'
                },
                belowContent: {
                    template: '<div ui-view="belowContent"></div>'
                }
            }
        });
    }
})();
