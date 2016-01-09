(function() {
    'use strict';

    angular
        .module('dashboard')
        .run(runFunction);

    /* @ngInject */
    function runFunction($rootScope, $window, $state, $timeout, dashboardRoute, dashboardBreadcrumbsService) {
        var breadcrumbs = dashboardBreadcrumbsService.breadcrumbs;
        init();

        var destroyOn = $rootScope.$on('$stateChangeSuccess', function(){
            setFullTitle();
        });

        $rootScope.$on('$destroy', function(){
            destroyOn();
        });

        function setFullTitle() {
            $timeout(function(){
                var title = dashboardRoute.title;
                angular.forEach(breadcrumbs.crumbs, function(crumb){
                    title +=' ' + dashboardRoute.separator + ' ' + (crumb.name);
                });
                $window.document.title = title;
            });
        }

        function init() {
            setFullTitle();
        }
    }
})();
