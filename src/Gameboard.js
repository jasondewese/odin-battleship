import { Ship } from "./Ship";

const Gameboard = () => {

    let _board = [];
    let _shipList = [];
    
    const _boardInit = (() => {
        for (let i = 0; i < 10; i++) {
            _board.push([]);
            for (let j = 0; j < 10; j++) {
                _board[i].push(-1);
            }
        }
    })();

    const _initShips = (() => {
        for (let i = 1; i <= 5; i++) {
            _shipList.push(Ship(i));
        }
    })();

    const placeShip = (shipIndex, x1,y1,x2,y2) => {

    }

    return {placeShip};
}

export {Gameboard};