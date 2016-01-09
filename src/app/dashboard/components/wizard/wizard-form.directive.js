(function() {
    'use strict';

    angular
        .module('dashboard.components')
        .directive('dashboardWizardForm', WizardFormProgress);

    /* @ngInject */
    function WizardFormProgress() {
        // Usage:
        //  <div dashboard-wizard>
        //      <form dashboard-wizard-form>
        //      </form>
        //  </div>
        //
        var directive = {
            require: ['form', '^dashboardWizard'],
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, require) {
            var ngFormCtrl = require[0];
            var dashboardWizardCtrl = require[1];

            // register this form with the parent dashboardWizard directive
            dashboardWizardCtrl.registerForm(ngFormCtrl);

            // watch for form input changes and update the wizard progress
            element.on('input', function() {
                dashboardWizardCtrl.updateProgress();
            });
        }
    }
})();
