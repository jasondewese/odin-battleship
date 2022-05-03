import { Game } from "./Game";

const createGameboardDOM = (() => {

    const _DEFAULT_SHIP_ORIENTATION = 'VERTICAL';
    let _shipOrientation = _DEFAULT_SHIP_ORIENTATION;

    const _changeShipOrientation = () => {
        _shipOrientation =  _shipOrientation === 'VERTICAL' ? 'HORIZONTAL' : 'VERTICAL';
    }

    const _addVerticalShip = (boardCell, playerBoard, i, j) => {
        let shipsPlaced = Game.getShipsPlaced();
        if (shipsPlaced < 5) {
            if (shipsPlaced === 0) {
                playerBoard.placeShip(shipsPlaced, i, j, i+1, j);
                for (let n = 0; n < shipsPlaced+2; n++) {
                    document.getElementById('player'+(i+n)+j).classList.add('ship-cell');
                }
            }
            else {
                playerBoard.placeShip(shipsPlaced, i, j, i+shipsPlaced, j);
                boardCell.classList.add('ship-cell');
                for (let n = 0; n < shipsPlaced+1; n++) {
                    document.getElementById('player'+(i+n)+j).classList.add('ship-cell');
                }
            }
            Game.addPlayerShip();
        }
    }

    const _addHorizontalShip = (boardCell, playerBoard, i, j) => {
        let shipsPlaced = Game.getShipsPlaced();
        if (shipsPlaced < 5) {
            if (shipsPlaced === 0) {
                playerBoard.placeShip(shipsPlaced, i, j, i, j+1);
                for (let n = 0; n < shipsPlaced+2; n++) {
                    document.getElementById('player'+i+(j+n)).classList.add('ship-cell');
                }
            }
            else {
                playerBoard.placeShip(shipsPlaced, i, j, i, j+shipsPlaced);
                boardCell.classList.add('ship-cell');
                for (let n = 0; n < shipsPlaced+1; n++) {
                    document.getElementById('player'+i+(j+n)).classList.add('ship-cell');
                }
            }
            Game.addPlayerShip();
        }
    }

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

                boardCell.addEventListener('click', function() {
                    if (_shipOrientation === 'VERTICAL') {
                        _addVerticalShip(boardCell, playerBoard, i, j);
                    }
                    else if (_shipOrientation === 'HORIZONTAL') {
                        _addHorizontalShip(boardCell, playerBoard, i, j);
                    }
                    if (Game.getShipsPlaced() >= 5) {
                       document.querySelector('.computer-board').style.removeProperty('display');
                    }
                });
                /*
                ************************
                No longer need event listener since computer attacks are assigned with code
                
                Could be used for a two player game option later
                ************************
                boardCell.addEventListener('click', function () {
                    Game.gameTurn(compPlayer, compBoard, playerBoard, i, j);
                });
                */
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
                    if (!Game.getGameOver()) {
                        Game.gameTurn(player, playerBoard, compBoard, i, j);
                    }
                   
                });
                
                boardWrapper.appendChild(boardCell);
            }
        }
        boardWrapper.style.display = 'none';
    }

    const initBoards = (player, compPlayer, playerBoard, compBoard) => {
        _createPlayerBoard(compPlayer, playerBoard, compBoard);
        _createCompBoard(player, playerBoard, compBoard);
        document.getElementById('axis-button').addEventListener('click', function() {
            _changeShipOrientation();
        });
    }

    return {initBoards};
})();

export {createGameboardDOM};