(function() {
    'use strict';

    angular
        .module('app', [
            'dashboard',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial', 'firebase',
            'ui.router', 'LocalStorageModule', 'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'uiGmapgoogle-maps', 'hljs', 'md.data.table', angularDragula(angular), 'ngFileUpload',
            'sampleModule', 'app.br'
            // uncomment above to activate the example seed module
            //'app.examples'
        ]);
})();
