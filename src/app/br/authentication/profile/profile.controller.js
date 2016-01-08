(function() {
	'use strict';

	angular
		.module('app.br.authentication')
		.controller('ProfileController', ProfileController);

		/* @ngInject */

	function ProfileController(User, $rootScope) {
		var vm = this;
		vm.settingsGroups - [{
			name: 'ADMIN.NOTIFICATIONS.ACCOUNT_SETTINGS',
			settings: [{
				title: 'ADMIN.NOTIFICATIONS.SHOW_LOCATION',
				icon: 'zmdi zmdi-pin',
				enabled: true
			},{
				title: 'ADMIN.NOTIFICATIONS.SHOW_AVATAR',
				icon: 'zmdi zmdi-face',
				enabled: false
			},{
				title: 'ADMIN.NOTIFICATIONS.SEND_NOTIFICATIONS',
				icon: 'zmdi zmdi-notifications-active',
				enabled: true
			}]

		}];
		vm.user = uid;
		uid = {
			name: uid.firstName,
			office: uid.office
		};
	}
})();
