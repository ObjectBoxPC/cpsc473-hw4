(function(window) {
	'use strict';
	var App = window.App;
	var myTruck = new App.Truck('ncc-1701', new App.DataStore());

	myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha' });
	myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf' });
	myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey' });
	myTruck.printOrders();
	myTruck.deliverOrder('dr@no.com');
	myTruck.deliverOrder('m@bond.com');
	myTruck.printOrders();
})(window);
