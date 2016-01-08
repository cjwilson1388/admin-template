(function() {
    'use strict';

    angular
        .module('sampleModule')
        .controller('SamplePageController', SamplePageController);

    /* @ngInject */
    function SamplePageController() {
        var vm = this;
        vm.testData = ['CJ', 'is', 'an amazing developer'];
    }
})();
