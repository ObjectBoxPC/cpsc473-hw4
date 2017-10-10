(function(window) {
	'use strict';
	var App = window.App || {};
	var $ = window.jQuery;

	function RemoteDataStore(url) {
		if(!url) {
			throw new Error('No remote URL specified');
		}

		this.serverUrl = url;
	}

	RemoteDataStore.prototype.add = function(key, val) {
		this.remove(key);
		$.post(this.serverUrl, val, function(serverResponse) {
			console.log(serverResponse);
		});
	};

	RemoteDataStore.prototype.get = function(key, cb) {
		$.get(this.serverUrl + '?emailAddress=' + key, function(serverResponse) {
			console.log(serverResponse);
			cb(serverResponse[0]);
		});
	};

	RemoteDataStore.prototype.getAll = function(cb) {
		$.get(this.serverUrl, function(serverResponse) {
			console.log(serverResponse);
			cb(serverResponse);
		});
	};

	RemoteDataStore.prototype.remove = function(key) {
		this.get(key, (function(response) {
			$.ajax(this.serverUrl + '/' + response.id, {
				type: 'DELETE',
			});
		}).bind(this));
	};

	App.RemoteDataStore = RemoteDataStore;
	window.App = App;
})(window);
