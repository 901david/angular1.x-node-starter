const layoutComponent = {
	bindings: {},
	controller: function () {},
	template: `<div class="container">
<div>
<header-component></header-component>
</div>

<h1>layout</h1>
<div>
<body-component></body-component>
</div>

<div>
<footer-component></footer-component>
</div>
</div>`
};

angular.module('app.layout')
	.component('layoutComponent', layoutComponent);

layoutComponent.$inject = [];
