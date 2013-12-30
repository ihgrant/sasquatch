/*	ui.js */

$(document).ready(function () {
	Sasquatch.loadCards().done(function () {
		console.log('done loading cards');
	});
});

var Sasquatch = (function () {
	var cards = {};
	var getData = function (target) {
		var dfd = $.Deferred();
		$.ajax({
			type: 'GET',
			url: target,
			dataType: 'json'
		});
		return dfd.promise();
	};
	var loadCards = function () {
		var dfd = $.Deferred();
		getData('cards.json').done(function (data) {
			cards = data;
			dfd.resolve();
		}).fail(function (msg) {
			dfd.reject(msg);
		});
		return dfd.promise();
	};

	return {
		cards: cards,
		loadCards: loadCards
	};
})(this);