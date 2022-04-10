import { Ship } from "./Ship";

const Gameboard = () => {

    let _board = [];
    let _shipList = [];
    
    const _initBoard = (() => {
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

        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                _board[i][j] = shipIndex;
            }
        }

        
        if (shipIndex >= _shipList.length || shipIndex < 0) {
            throw new Error('No ship exists at provided index');
        }
        if (x1 >= 10 || y1 >= 10 ||x2 >= 10 || y2 >= 10) {
            throw new Error('Invalid coordinates received. Out of bounds');
        }
        if (x1 < 0 || y1 < 0|| x2 < 0 || y2 < 0) {
            throw new Error('Invalid coordinates received. Out of bounds');
        }
        
        return [_board[x1][y1], _board[x2][y2]];
    }

    return {placeShip};
}

export {Gameboard};