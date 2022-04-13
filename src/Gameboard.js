import { Ship } from "./Ship";

const Gameboard = () => {
    const _BOARDSIZE = 10;
    let _board = [];
    let _shipList = [];
    let _shotsFired = [];
    
    const _initBoard = (() => {
        for (let i = 0; i < _BOARDSIZE; i++) {
            _board.push([]);
            _shotsFired.push([]);
            for (let j = 0; j < _BOARDSIZE; j++) {
                _board[i].push(-1);
                _shotsFired[i].push(-1);
            }
        }
    })();

    const _initShips = (() => {
        for (let i = 1; i <= 5; i++) {
            _shipList.push(Ship(i));
        }
    })();

    const placeShip = (ship, x1,y1,x2,y2) => {

        let currIndex = 0;

        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                _board[i][j] = {
                    ship: ship,
                    shipIndex: currIndex
                };
                currIndex++;
            }
        }

        if (ship >= _shipList.length || ship < 0) {
            throw new Error('No ship exists at provided index');
        }
        if (x1 >= _BOARDSIZE || y1 >= _BOARDSIZE ||x2 >= _BOARDSIZE || y2 >= _BOARDSIZE) {
            throw new Error('Invalid coordinates received. Out of bounds');
        }
        if (x1 < 0 || y1 < 0|| x2 < 0 || y2 < 0) {
            throw new Error('Invalid coordinates received. Out of bounds');
        }
        
        return [_board[x1][y1].ship, _board[x2][y2].ship];
    }

    const receiveAttack = (x1,y1) => {
        const MISS = 0;
        const HIT = 1;
        const boardValue = typeof _board[x1][y1] === 'object' ? _board[x1][y1].ship : _board[x1][y1];

        if (boardValue !== -1) {
            _shipList[boardValue].hit(_board[x1][y1].shipIndex);
            return 'HIT';
        }
        else {
            return 'MISS';
        }
    }

    return {placeShip, receiveAttack};
}

export {Gameboard};