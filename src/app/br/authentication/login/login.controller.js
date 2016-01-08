(function() {
  'use strict';

    angular
      .module('app.br.authentication')
      .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($state, dashboardSettings, Auth, User){
      var vm = this;

      vm.login = login;
      vm.loggedInUser;

    function login() {
      Auth.$authWithPassword({
        email: vm.email,
        password: vm.password
      }).then(function(data) {
        vm.email = null;
        vm.password = null;
        $state.go('home');
      }).catch(function(error) {
        console.log(error);

      });
    }
    }
})();
