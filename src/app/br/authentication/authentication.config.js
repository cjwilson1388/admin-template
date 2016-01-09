(function() {
    'use strict';

    angular
        .module('app.br.authentication')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, dashboardMenuProvider) {

        $stateProvider
        .state('authentication', {
            abstract: true,
            templateUrl: 'app/br/authentication/layouts/authentication.tmpl.html'
        })
        .state('authentication.login', {
          url: '/login',
          templateUrl: 'app/br/authentication/login/login.tmpl.html',
          controller: 'LoginController',
          controllerAs: 'auth'
        })
        .state('dashboard.admin-default.adduser', {
          url: '/br/adduser',
          templateUrl: 'app/br/authentication/user/add-user.tmpl.html',
          controller: 'AddUserController',
          controllerAs: 'vm'
        })

        .state('authentication.profile', {
          url: '/profile',
          templateUrl: 'app/br/authentication/profile/profile.tmpl.html',
          controller: 'ProfileController',
          controllerAs: 'vm'
        });

        dashboardMenuProvider.addMenu({
            name: 'Authentication',
            icon: 'zmdi zmdi-grade',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Add User',
                state: 'authentication.login',
                type: 'link'
            }]
        });
   }
})();
