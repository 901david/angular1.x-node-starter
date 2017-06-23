const bodyComponent = {
	bindings: {},
	controller: function () {},
	template: `<h1>body</h1>
<ui-view></ui-view>`
};

angular.module('app.layout')
	.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];
