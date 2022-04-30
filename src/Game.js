import { createGameboardDOM } from "./createGameboardDOM";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

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

    const _changeTurn = () => {
        turn = turn === 'PLAYER' ? 'COMP' : 'PLAYER';
        console.log(turn + ' turn.');
    }

    const gameTurn = (currPlayer, playerBoard, enemyBoard, x, y) => {
        let shot = currPlayer.attack(enemyBoard, x, y)
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