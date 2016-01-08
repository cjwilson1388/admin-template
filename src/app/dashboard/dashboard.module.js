(function() {
    'use strict';

    angular
        .module('dashboard', [
            'ngMaterial',
            'dashboard.layouts', 'dashboard.components', 'dashboard.themes', 'dashboard.directives', 'dashboard.router',
            // uncomment above to activate the speed profiler
            'ui.router'
        ]);
})();
