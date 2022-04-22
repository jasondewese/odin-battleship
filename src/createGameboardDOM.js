const createGameboardDOM = (() => {

    const _createPlayerBoard = (playerBoard) => {
        const boardWrapper = document.querySelector('.player-board');
        //default desktop height/width in px
        

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const boardCell = document.createElement('div');
                boardCell.classList.add('board-cell');
                if (typeof playerBoard.getBoard()[i][j] === "object") {
                   boardCell.style.backgroundColor = '#60a5fa'; 
                }
                boardWrapper.appendChild(boardCell);

                
            }
        }

    }

    const _createCompBoard = (compBoard) => {
        const boardWrapper = document.querySelector('.computer-board');
        //default desktop height/width in px
        

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const boardCell = document.createElement('div');
                boardCell.classList.add('board-cell');

                boardWrapper.appendChild(boardCell);
            }
        }
    }

    const initBoards = (playerBoard, compBoard) => {
        _createPlayerBoard(playerBoard);
        _createCompBoard(compBoard);
    }

    return {initBoards};
})();

export {createGameboardDOM};