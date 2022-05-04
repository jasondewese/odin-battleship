import { createGameboardDOM } from "./createGameboardDOM";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import { mathLogic } from "./mathLogic";

const Game = (() => {

    const player = Player(true);
    const compPlayer = Player(false);
    const playerBoard = Gameboard();
    const compBoard = Gameboard();
    let turn = 'PLAYER';
    let _gameOver = false;

    const getGameOver = () => {
        return _gameOver;
    }

    const _placeCompShips = () => {
        //EDIT NEEDED
        //Add ability for computer to randomly place ships
        
        /*
        for (let i = 0; i < 5; i++) {
            let x1 = mathLogic.getRandomInt(0, 9);
            let y1 = mathLogic.getRandomInt(0, 9);
            while (!compBoard.isValidPlacement(x1,y1)) {
                x1 = mathLogic.getRandomInt(0, 9);
                y1 = mathLogic.getRandomInt(0, 9);
                compBoard.changeShipOrientation();
            }
           
            if (compBoard.getShipOrientation() === 'VERTICAL') {

                if (i === 0) {
                    compBoard.placeShip(i, x1, y1, x1+i+1, y1);
                    console.log('ship placed');
                }
                else {
                    compBoard.placeShip(i, x1, y1, x1+i, y1);
                    console.log('ship placed');
                }
            }
            else if (compBoard.getShipOrientation() === 'HORIZONTAL') {
                if (i === 0) {
                    compBoard.placeShip(i, x1, y1, x1, y1+i+1);
                    console.log('ship placed');
                }
                else {
                    compBoard.placeShip(i, x1, y1, x1, y1+i);
                    console.log('ship placed');
                }
            }
           
        }
        */

        
        let previousShipsY = [];
        
        for (let i = 0; i < 5; i++) {
            if (i === 0) {
                let x1 = mathLogic.getRandomInt(0, 10-(i+1));
                let y1 = mathLogic.getRandomInt(0, 10);
                //continue getting new randomInt until it hasn't been selected before
                while (previousShipsY.includes(y1) || previousShipsY.includes(y1+1) || previousShipsY.includes(y1-1)) {
                    y1 = mathLogic.getRandomInt(0, 10);
                }
                let y2 = y1;
                let x2 = x1 + 1;
                compBoard.placeShip(i, x1, y1, x2, y2);
                previousShipsY.push(y1);
            }
            else {
                let x1 = mathLogic.getRandomInt(0, 10-i);
                let y1 = mathLogic.getRandomInt(0, 10);
                //continue getting new randomInt until it hasn't been selected before
                while (previousShipsY.includes(y1) || previousShipsY.includes(y1+1) || previousShipsY.includes(y1-1)) {
                    y1 = mathLogic.getRandomInt(0, 10);
                }
                let y2 = y1;
                let x2 = x1 + i;
                compBoard.placeShip(i, x1, y1, x2, y2);
                previousShipsY.push(y1);
            }
        }
        
    }

    const initGame = () => {
        _placeCompShips();

        createGameboardDOM.initBoards(player, compPlayer, playerBoard, compBoard);
        console.log('Click to place your ships');
    }

    const restartGame = () => {
        let playerBoardDOM = document.querySelector('.player-board');
        let compBoardDOM = document.querySelector('.computer-board');
        while (playerBoardDOM.firstChild) {
            playerBoardDOM.removeChild(playerBoardDOM.firstChild);
        }
        while (compBoardDOM.firstChild) {
            compBoardDOM.removeChild(compBoardDOM.firstChild);
        }
        playerBoard.resetBoard();
        compBoard.resetBoard();

        initGame();

        document.getElementById('axis-button').addEventListener('click', function() {
            playerBoard.changeShipOrientation();
        });
    }

    const _processCompAttack = () => {                
        let randX = mathLogic.getRandomInt(0, 10);
        let randY = mathLogic.getRandomInt(0, 10);
        let shot = compPlayer.attack(playerBoard, randX, randY);
        
        let attackedBoard = turn === 'PLAYER' ? 'comp' : 'player';

        console.log(shot);
        console.log(`Attack received at ${randX},${randY}`);

        let attackedCell = document.getElementById(attackedBoard+randX+randY);
        if (shot === 'HIT') {
            attackedCell.classList.add('hit-cell');
        }
        if (shot === 'MISS') {
            attackedCell.classList.add('miss-cell');
        }
    }

    const _changeTurn = () => {
        if (!_gameOver) {
            turn = turn === 'PLAYER' ? 'COMP' : 'PLAYER';
            console.log(turn + ' turn.');
            if (turn === 'COMP') {
                _processCompAttack();
                _changeTurn();
            }
        }
    }

    const gameTurn = (currPlayer, playerBoard, enemyBoard, x, y) => {
        let shot;
        if (turn === 'PLAYER') {
            shot = currPlayer.attack(enemyBoard, x, y);
        }
        else if (turn === 'COMP') {
            let randX = mathLogic.getRandomInt(0, 10);
            let randY = mathLogic.getRandomInt(0, 10);
            shot = currPlayer.attack(enemyBoard, randX, randY);
        }
        
        let attackedBoard = turn === 'PLAYER' ? 'comp' : 'player';

        console.log(shot);
        console.log(`Attack received at ${x},${y}`);

        let attackedCell = document.getElementById(attackedBoard+x+y);
        if (shot === 'HIT') {
            attackedCell.classList.add('hit-cell');
        }
        if (shot === 'MISS') {
            attackedCell.classList.add('miss-cell');
        }

        let playerMsg = currPlayer.isPlayerHuman() ? 'You win!' : 'Computer player wins!';
        if (enemyBoard.isAllSunk()) {
            console.log(playerMsg);
            _gameOver = true;
        }   
        _changeTurn();
    }

    return {initGame, gameTurn, getGameOver, restartGame};

})();

export {Game};