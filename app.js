let counter = 0;
let square = 0;

for(let i = 0; i < 8; i++) {
	createRow(square,i);
	square +=8;
}
function createRow(square,count) {
	let main = 'main' + count.toString();
	for(let i = 0; i < 8; i++) {
		if (count % 2 === 0) {
			let div = document.createElement('div');
			div.className = 'white';
			document.getElementById(main).appendChild(div);
			div.id = square.toString();
		} else {
			let div = document.createElement('div');
			div.className = 'black';
			document.getElementById(main).appendChild(div);
			div.id = square.toString();
		}
		square++;
		count++;
	}
}

function startingBoard() {
	createWhitePawns();
	createBlackPawns();
	createWhiteRooks();
	createBlackRooks();
	createWhiteKnights();
	createBlackKnights();
	createWhiteBishops();
	createBlackBishops();
	createWhiteQueen();
	createBlackQueen();
	createWhiteKing();
	createBlackKing();
}
function createWhitePawns(){
	for(let i = 0; i < 8; i++) {
		let startingSquare = (48 + i).toString();
		let pawn = document.createElement('div');
		pawn.className = 'whitePawn';
		pawn.id = i.toString();
		document.getElementById(startingSquare).appendChild(pawn);
	}
}
function createBlackPawns(){
	for(let i = 0; i < 8; i++) {
		let startingSquare = (8 + i).toString();
		let pawn = document.createElement('div');
		pawn.className = 'blackPawn';
		pawn.id = i.toString();
		document.getElementById(startingSquare).appendChild(pawn);
	}
}
function createWhiteRooks() {
	for(let i = 0; i < 2; i++) {
		let startingSquare = (56 + (i * 7)).toString();
		let rook = document.createElement('div');
		rook.className = 'whiteRook';
		rook.id = i.toString();
		document.getElementById(startingSquare).appendChild(rook);
	}
}
function createBlackRooks() {
	for(let i = 0; i < 2; i++) {
		let startingSquare = (0 + (i * 7)).toString();
		let rook = document.createElement('div');
		rook.className = 'blackRook';
		rook.id = i.toString();
		document.getElementById(startingSquare).appendChild(rook);
	}
}
function createWhiteKnights() {
	for(let i = 0; i < 2; i++) {
		let startingSquare = (57 + (i * 5)).toString();
		let knight = document.createElement('div');
		knight.className = 'whiteKnight';
		knight.id = i.toString();
		document.getElementById(startingSquare).appendChild(knight);
	}
}
function createBlackKnights() {
	for(let i = 0; i < 2; i++) {
		let startingSquare = (1 + (i * 5)).toString();
		let knight = document.createElement('div');
		knight.className = 'blackKnight';
		knight.id = i.toString();
		document.getElementById(startingSquare).appendChild(knight);
	}
}
function createWhiteBishops() {
	for(let i = 0; i < 2; i++) {
		let startingSquare = (58 + (i * 3)).toString();
		let bishop = document.createElement('div');
		bishop.className = 'whiteBishop';
		bishop.id = i.toString();
		document.getElementById(startingSquare).appendChild(bishop);
	}
}
function createBlackBishops() {
	for(let i = 0; i < 2; i++) {
		let startingSquare = (2 + (i * 3)).toString();
		let bishop = document.createElement('div');
		bishop.className = 'blackBishop';
		bishop.id = i.toString();
		document.getElementById(startingSquare).appendChild(bishop);
	}
}
function createWhiteQueen() {
	let startingSquare = '59';
	let queen = document.createElement('div');
	queen.className = 'whiteQueen';
	queen.id = '1';
	document.getElementById(startingSquare).appendChild(queen);
}
function createBlackQueen() {
	let startingSquare = '3';
	let queen = document.createElement('div');
	queen.className = 'blackQueen';
	queen.id = '1';
	document.getElementById(startingSquare).appendChild(queen);
}
function createWhiteKing() {
	let startingSquare = '60';
	let king = document.createElement('div');
	king.className = 'whiteKing';
	king.id = '1';
	document.getElementById(startingSquare).appendChild(king);
}
function createBlackKing() {
	let startingSquare = '4';
	let king = document.createElement('div');
	king.className = 'blackKing';
	king.id = '1';
	document.getElementById(startingSquare).appendChild(king);
}
startingBoard();




















