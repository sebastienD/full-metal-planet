/*
 * @Import(constant.js)
 */
var Piece = function(playerId, pieceType, x, y, orientation) {
	this.id = Piece.sequence();
	this.playerId = playerId;
	this.pieceType = pieceType;
	this.x = x;
	this.y = y;
	this.contenu = [];

	if (this.pieceType.destroyer) {
		this.nbAmmos = 2;
	} else {
		this.nbAmmos = 0;
	}

	if (orientation == null) {
		this.orientation = ORIENTATION.S;
	} else {
		this.orientation = orientation;
	}
	this.addContenu = function(pieceId) {
		if (pieceId == null) {
			throw 'Piece vide !';
		} else {
			this.contenu.push(pieceId);
		}
	}
	this.getContenu = function() {
		return this.contenu;
	}
}

Piece.sequenceId = 0;
Piece.sequence = function() {
	return Piece.sequenceId++;
}