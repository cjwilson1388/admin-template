(function() {
    'use strict';

    angular
        .module('dashboard', [
            'ngMaterial',
            'dashboard.components', 'dashboard.directives', 'dashboard.layouts', 'dashboard.profiler', 'dashboard.router', 'dashboard.themes',
            // uncomment above to activate the speed profiler
            'ui.router'
        ]);
})();
