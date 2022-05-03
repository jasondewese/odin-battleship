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

    const initGame = () => {
        
        playerBoard.placeShip(0, 0, 0, 1, 0);
        playerBoard.placeShip(1, 0, 1, 1, 1);
        playerBoard.placeShip(2, 0, 2, 2, 2);
        playerBoard.placeShip(3, 0, 3, 3, 3);
        playerBoard.placeShip(4, 0, 4, 4, 4);
        


        compBoard.placeShip(0, 0, 0, 1, 0);
        compBoard.placeShip(1, 0, 2, 1, 2);
        compBoard.placeShip(2, 8, 5, 8, 8);
        compBoard.placeShip(3, 1, 7, 5, 7);
        compBoard.placeShip(4, 6, 1, 6, 5);

        createGameboardDOM.initBoards(player, compPlayer, playerBoard, compBoard);
        console.log(turn + ' turn.');
       
    }

    const gameLoop = () => {
        while (!playerBoard.isAllSunk() && !compBoard.isAllSunk()) {
            console.log("Game over.");
            if (playerBoard.isAllSunk()) {
                console.log("Computer player wins!");
            }
            else {
                console.log("You win!");
            }
        }
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
        turn = turn === 'PLAYER' ? 'COMP' : 'PLAYER';
        console.log(turn + ' turn.');
        if (turn === 'COMP') {
            _processCompAttack();
            _changeTurn();
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
        }   
        _changeTurn();
    }

    return {initGame, gameLoop, gameTurn};

})();

export {Game};