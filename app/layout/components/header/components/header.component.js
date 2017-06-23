const headerComponent = {
	bindings: {},
	controller: function () {},
	template: `<div class="link-bar">
    <a ui-sref="app.home">Home</a>
    <a ui-sref="app.about">About</a>
</div>`
};

angular.module('app.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
