import { createGameboardDOM } from "./createGameboardDOM";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";

const Game = (() => {

    const player = Player(true);
    const compPlayer = Player(false);
    const playerBoard = Gameboard();
    const compBoard = Gameboard();

    const initGame = () => {
        playerBoard.placeShip(0, 0, 0, 1, 0);
        playerBoard.placeShip(1, 0, 1, 1, 1);
        playerBoard.placeShip(2, 0, 2, 2, 2);
        playerBoard.placeShip(3, 0, 3, 3, 3);
        playerBoard.placeShip(4, 0, 4, 4, 4);

        compBoard.placeShip(0, 0, 0, 1, 0);
        compBoard.placeShip(1, 0, 1, 1, 1);
        compBoard.placeShip(2, 0, 2, 2, 2);
        compBoard.placeShip(3, 0, 3, 3, 3);
        compBoard.placeShip(4, 0, 4, 4, 4);

        createGameboardDOM.initBoards(player, compPlayer, playerBoard, compBoard);
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

    return {initGame, gameLoop};

})();

export {Game};