(function() {
    'use strict';

    angular
        .module('seed-module')
        .controller('SeedPageController', SeedPageController);

    /* @ngInject */
    function SeedPageController() {
        var vm = this;
        vm.testData = ['CJ', 'is an ', 'amazing developer!'];
    }
})();