(function(window) {
	'use strict';
	var App = window.App;
	var ds = new App.DataStore();

	ds.add('m@bond.com', 'tea');
	ds.add('james@bond.com', 'eshpressho');
	console.log(ds.getAll());
	ds.remove('james@bond.com');
	console.log(ds.getAll());
	console.log(ds.get('m@bond.com'));
	console.log(ds.get('james@bond.com'));
})(window);
