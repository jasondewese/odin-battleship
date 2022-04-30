import { Game } from "./Game";

const createGameboardDOM = (() => {

    const _createPlayerBoard = (compPlayer, playerBoard, compBoard) => {
        const boardWrapper = document.querySelector('.player-board');
        //default desktop height/width in px
        

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const boardCell = document.createElement('div');
                boardCell.classList.add('board-cell');
                boardCell.id = 'player'+i+j;
                if (typeof playerBoard.getBoard()[i][j] === "object") {
                   boardCell.classList.add('ship-cell');
                }

                boardCell.addEventListener('click', function () {
                    Game.gameTurn(compPlayer, compBoard, playerBoard, i, j);
                });

                boardWrapper.appendChild(boardCell);

                
            }
        }

    }

    const _createCompBoard = (player, playerBoard, compBoard) => {
        const boardWrapper = document.querySelector('.computer-board');
        //default desktop height/width in px
        

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const boardCell = document.createElement('div');
                boardCell.classList.add('board-cell');
                boardCell.id = 'comp'+i+j;
                if (typeof compBoard.getBoard()[i][j] === "object") {
                    boardCell.classList.add('ship-cell');
                 }
                
                boardCell.addEventListener('click', function () {
                    Game.gameTurn(player, playerBoard, compBoard, i, j);
                });
                boardWrapper.appendChild(boardCell);
            }
        }
    }

    const initBoards = (player, compPlayer, playerBoard, compBoard) => {
        _createPlayerBoard(compPlayer, playerBoard, compBoard);
        _createCompBoard(player, playerBoard, compBoard);
    }

    return {initBoards};
})();

export {createGameboardDOM};