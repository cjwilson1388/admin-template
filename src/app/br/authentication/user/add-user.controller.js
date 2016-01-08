(function() {
  'use strict';

    angular
      .module('app.br.authentication')
      .controller('AddUserController', AddUserController);

    /* @ngInject */
    function AddUserController($state, dashboardSettings, Auth, $scope, User){
      var vm = this;

      vm.createUser = createUser;
      vm.loggedInUser;

    function createUser() {

      Auth.$createUser({
        email: vm.email,
        password: vm.password,
        office: vm.office,
        username: vm.email,
        firstName: vm.firstName,
        lastName: vm.lastName
      }).then(function(userData) {
        saveUser(userData);
        login();
      }).catch(function(error){
        vm.error = error;
      });
    }

    function saveUser(userData) {
      var user = User.newUserRef(userData);
      user.username = vm.email;
      user.email = vm.email;
      user.office = vm.office;
      user.firstName = vm.firstName;
      user.lastName = vm.lastName;

      user.$save().then(function(success) {
        vm.username = null;
        vm.email = null;
        vm.password = null;
        vm.office = null;
        vm.firstName = null;
        vm.lastName = null;
          $state.go('home');
        }, function(error) {
          console.log("there was an error! " + error);
        });
    }

    $scope.offices = [
      "Salt Lake",
      "San Fransisco",
      "Farmington",
      "Provo",
      "online"
    ];
  }
})();
