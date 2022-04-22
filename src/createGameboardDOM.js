import { Game } from "./Game";

const createGameboardDOM = (() => {

    const _createPlayerBoard = (compPlayer, playerBoard, compBoard) => {
        const boardWrapper = document.querySelector('.player-board');
        //default desktop height/width in px
        

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const boardCell = document.createElement('div');
                boardCell.classList.add('board-cell');
                if (typeof playerBoard.getBoard()[i][j] === "object") {
                   boardCell.style.backgroundColor = '#60a5fa'; 
                   boardCell.classList.add('ship-cell');
                }

                boardCell.addEventListener('click', function () {
                    Game.gameTurn(compPlayer, compBoard, playerBoard, i, j);
                    /*
                    console.log(compPlayer.attack(playerBoard, i, j));
                    console.log(`Attack received at ${i},${j}`);
                    if (playerBoard.isAllSunk()) {
                        console.log("Computer player wins!");
                    }
                    else if (compBoard.isAllSunk()) {
                        console.log("You win!");
                    }
                    */
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
                if (typeof compBoard.getBoard()[i][j] === "object") {
                    boardCell.style.backgroundColor = '#60a5fa'; 
                    boardCell.classList.add('ship-cell');
                 }
                
                boardCell.addEventListener('click', function () {
                    Game.gameTurn(player, playerBoard, compBoard, i, j);
                    /*
                    console.log(player.attack(compBoard, i, j));
                    console.log(`Attack received at ${i},${j}`);
                   
                    if (playerBoard.isAllSunk()) {
                        console.log("Computer player wins!");
                    }
                    else if (compBoard.isAllSunk()) {
                        console.log("You win!");
                    }
                    */
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