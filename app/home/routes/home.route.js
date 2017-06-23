function homeRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.home',
			url: '',
			component: 'homeComponent',
			abstract: false,
			resolve: {
				property: function () {
					return 'property';
				}
			}
		});
}

angular.module('app.home')
	.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];
