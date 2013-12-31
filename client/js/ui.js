/*	ui.js */

$(document).ready(function () {
	Sasquatch.loadCards().done(function () {
		var cards = Sasquatch.getCards(),
			temp = getTemplate('card'),
			out = '';
		$.each(cards, function (i, el) {
			out += temp.replace(/#name/g, el.name)
				.replace(/#type/g, el.type)
				.replace(/#description/g, el.description);
		});
		$('#board').html(out);
	}).fail(function () {
		console.log('failure');
	});
});

var getTemplate = function (id) {
	switch (id) {
		case 'card':
			return '<div class="card" draggable="true" data-type="#type"><div class="cardinterior"><h1>#name</h1><p>#description</p></div></div>';
		default:
			console.log('I don\'t recognise that template.');
			break;
	}
};

var Sasquatch = (function () {
	var cards = {};
	var getData = function (target) {
		var dfd = $.Deferred();
		$.ajax({
			type: 'GET',
			url: target,
			dataType: 'json'
		}).done(function (data) {
			dfd.resolve(data);
		}).fail(function (jqXHR, textStatus, errorThrown) {
			dfd.reject('Failure.', jqXHR);
		});
		return dfd.promise();
	};
	var loadCards = function () {
		var dfd = $.Deferred();
		getData('cards.json').done(function (data) {
			cards = data;
			console.log(cards, data);
			dfd.resolve();
		}).fail(function (msg) {
			dfd.reject(msg);
		});
		return dfd.promise();
	};
	var getCards = function () {
		return cards;
	};

	return {
		getCards: getCards,
		loadCards: loadCards
	};
})(this);
