(function() {
    'use strict';

    angular
        .module('dashboard.directives')
        .directive('paletteBackground', paletteBackground);

    /* @ngInject */
    function paletteBackground(dashboardTheming) {
        // Usage:
        // ```html
        // <div palette-background="green:500">Coloured content</div>
        // ```
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element, attrs) {
            var splitColor = attrs.paletteBackground.split(':');
            var color = dashboardTheming.getPaletteColor(splitColor[0], splitColor[1]);

            if(angular.isDefined(color)) {
                $element.css({
                    'background-color': dashboardTheming.rgba(color.value),
                    'border-color': dashboardTheming.rgba(color.value),
                    'color': dashboardTheming.rgba(color.contrast)
                });
            }
        }
    }
})();
