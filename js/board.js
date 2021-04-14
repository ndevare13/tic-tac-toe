const Board = (() => {
    const initializeBoard = () => {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.turn = 1;
    };

    const getTurnNumber = () => turn;

    const updateBoard = index => {
        if (turn % 2 !== 0) {
            board[index - 1] = 'X';
        } else {
            board[index - 1] = 'O';
        }
        turn++;
    };

    const checkBoardStatus = () => {
        const squaresToHighLight = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        const winConditionsX = [
            board[0] === board[3] && board[0] === board[6] && board[0] !== '' && board[0] !== 'O',
            board[1] === board[4] && board[1] === board[7] && board[1] !== '' && board[1] !== 'O',
            board[2] === board[5] && board[2] === board[8] && board[2] !== '' && board[2] !== 'O',
            board[0] === board[1] && board[0] === board[2] && board[0] !== '' && board[0] !== 'O',
            board[3] === board[4] && board[3] === board[5] && board[3] !== '' && board[3] !== 'O',
            board[6] === board[7] && board[6] === board[8] && board[6] !== '' && board[6] !== 'O',
            board[0] === board[4] && board[0] === board[8] && board[0] !== '' && board[0] !== 'O',
            board[2] === board[4] && board[2] === board[6] && board[2] !== '' && board[2] !== 'O'
        ];

        const winConditionsO = [
            board[0] === board[3] && board[0] === board[6] && board[0] !== '' && board[0] !== 'X',
            board[1] === board[4] && board[1] === board[7] && board[1] !== '' && board[1] !== 'X',
            board[2] === board[5] && board[2] === board[8] && board[2] !== '' && board[2] !== 'X',
            board[0] === board[1] && board[0] === board[2] && board[0] !== '' && board[0] !== 'X',
            board[3] === board[4] && board[3] === board[5] && board[3] !== '' && board[3] !== 'X',
            board[6] === board[7] && board[6] === board[8] && board[6] !== '' && board[6] !== 'X',
            board[0] === board[4] && board[0] === board[8] && board[0] !== '' && board[0] !== 'X',
            board[2] === board[4] && board[2] === board[6] && board[2] !== '' && board[2] !== 'X'
        ];

        if (winConditionsX.includes(true)) {
            const indexOfWinCondition = winConditionsX.indexOf(true);
            return [true, 'Player 1', squaresToHighLight[indexOfWinCondition]];
        } else if (winConditionsO.includes(true)) {
            const indexOfWinCondition = winConditionsO.indexOf(true);
            return [true, 'Player 2', squaresToHighLight[indexOfWinCondition]];
        } else {
            return [false];
        }
    };

    return { initializeBoard, updateBoard, getTurnNumber, checkBoardStatus };
})();