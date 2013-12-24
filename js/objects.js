/* objects */

var uid = 1;
function getNewID() {
	uid += 1;
	return uid;
}

function Card(location) {
	this.id = getNewID();
	this.location = 0;
}
Card.prototype.action = function (targetId, action) {
	// idk
};
Card.prototype.move = function(uid) {
	// add conditionals
	this.location = uid;
};

Unit.prototype = new Card();
function Unit() {
	this.type = 'unit';
}

Flagship.prototype = new Unit();
function Flagship() {
	this.isFlagship = true;
}

Upgrade.prototype = new Card();
function Upgrade(type) {
	this.type = type;
}

function Location(name) {
	this.id = getNewID();
	this.name = name;
}

(function Game() {
	intialize();
})(this);

Game.prototype.initialize = function() {
	this.hand = new Location('hand');
	this.board = new Location('board');
	this.deck = new Location('deck');
};
