(function() {
    'use strict';

    angular
        .module('dashboard.components')
        .directive('dashboardWizard', DashboardWizard);

    /* @ngInject */
    function DashboardWizard() {
        // Usage: <div dashboard-wizard> (put some forms in here) </div>
        //
        // Creates: Nothing
        //
        var directive = {
            bindToController: true,
            controller: WizardController,
            controllerAs: 'dashboardWizard',
            restrict: 'A'
        };
        return directive;
    }

    /* @ngInject */
      function WizardController($scope, $timeout) {
        var vm = this;

        var forms = [];
        var totalErrors = 0;
        var fixedErrors = 0;

        vm.currentStep = 0;
        vm.getForm = getForm;
        vm.isFormValid = isFormValid;
        vm.nextStep = nextStep;
        vm.nextStepDisabled = nextStepDisabled;
        vm.prevStep = prevStep;
        vm.prevStepDisabled = prevStepDisabled;
        vm.progress = 0;
        vm.registerForm = registerForm;
        vm.updateProgress = updateProgress;

        ////////////////

        function getForm(index) {
            return forms[index];
        }

        function nextStep() {
            vm.currentStep = vm.currentStep + 1;
        }

        function nextStepDisabled() {
            // get current active form
            var form = $scope.dashboardWizard.getForm(vm.currentStep);
            var formInvalid = true;
            if(angular.isDefined(form) && angular.isDefined(form.$invalid)) {
                formInvalid = form.$invalid;
            }
            return formInvalid;
        }

        function isFormValid(step) {
            if(angular.isDefined(forms[step])) {
                return forms[step].$valid;
            }
        }

        function prevStep() {
            vm.currentStep = vm.currentStep - 1;
        }

        function prevStepDisabled() {
            return vm.currentStep === 0;
        }

        function registerForm(form) {
            forms.push(form);
        }

        function updateProgress() {
            var errors = calculateErrors();
            fixedErrors = totalErrors - errors;

            // calculate percentage process for completing the wizard
            vm.progress = Math.floor((fixedErrors / totalErrors) * 100);
        }

        function calculateErrors() {
            var errorCount = 0;
            for (var form = forms.length - 1; form >= 0; form--) {
                if(angular.isDefined(forms[form].$error)) {
                    for(var error in forms[form].$error) {
                        errorCount += forms[form].$error[error].length;
                    }
                }
            }
            return errorCount;
        }

        // init

        // wait until this dashboard wizard is ready (all forms registered)
        // then calculate the total errors
        $timeout(function() {
            totalErrors = calculateErrors();
        });
    }
})();