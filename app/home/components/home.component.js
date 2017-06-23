const homeComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.public = public;

		ctrl.$onInit = function () {};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function public() {}

		function private() {}
	},
	template: `<div>
<h1>home</h1>
</div>`
};

angular.module('app.home')
	.component('homeComponent', homeComponent);

homeComponent.$inject = [];
