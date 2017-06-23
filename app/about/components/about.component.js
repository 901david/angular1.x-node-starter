const aboutComponent = {
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
<h1>about</h1>
</div>`
};

angular.module('app.about')
	.component('aboutComponent', aboutComponent);

aboutComponent.$inject = [];
