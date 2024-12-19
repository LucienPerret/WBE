function connect4Winner(character, board) {
	return checkColumn(character, board) || checkRow(character, board) || checkDiagonal(character, board)
}

function checkColumn(character, board) {
	let consecutiveCharacters = 0
	for (let i = 0; i < board[0].length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[j][i] == character) {
				consecutiveCharacters++
				if (consecutiveCharacters == 4) return true
			} else {
				consecutiveCharacters = 0
			}
		}
		consecutiveCharacters = 0
	}
	return false
}

function checkRow(character, board) {
	let consecutiveCharacters = 0
	for (const [rowId, row] of board.entries()) {
		for (const [fieldId, field] of row.entries()) {
			if (field == character) {
				consecutiveCharacters++
				if (consecutiveCharacters == 4) return true
			} else {
				consecutiveCharacters = 0
			}
		}
		consecutiveCharacters = 0
	}
	return false

}

function checkDiagonal(character, board) {
    const HEIGHT = board.length;
    const WIDTH = board[0].length;
    
    for (let row = 3; row < HEIGHT; row++) {
        for (let col = 0; col < WIDTH - 3; col++) {
            if (board[row][col] === character &&
                board[row-1][col+1] === character &&
                board[row-2][col+2] === character &&
                board[row-3][col+3] === character) {
                return true;
            }
        }
    }

    for (let row = 0; row < HEIGHT - 3; row++) {
        for (let col = 0; col < WIDTH - 3; col++) {
            if (board[row][col] === character &&
                board[row+1][col+1] === character &&
                board[row+2][col+2] === character &&
                board[row+3][col+3] === character) {
                return true;
            }
        }
    }
    
    return false;
}
module.exports = { connect4Winner }
