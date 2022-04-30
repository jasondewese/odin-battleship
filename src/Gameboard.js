import { Ship } from "./Ship";

const Gameboard = () => {
    const _BOARDSIZE = 10;
    const _MISS = 0;
    const _HIT = 1;
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
            if (i === 1) {
                _shipList.push(Ship(i+1));
            }
            else {
                _shipList.push(Ship(i));
            }     
        }
    })();

    const placeShip = (ship, x1,y1,x2,y2) => {

        if (ship >= _shipList.length || ship < 0) {
            throw new Error('No ship exists at provided index');
        }
        if (x1 >= _BOARDSIZE || y1 >= _BOARDSIZE ||x2 >= _BOARDSIZE || y2 >= _BOARDSIZE) {
            throw new Error('Invalid coordinates received. Out of bounds');
        }
        if (x1 < 0 || y1 < 0|| x2 < 0 || y2 < 0) {
            throw new Error('Invalid coordinates received. Out of bounds');
        }

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
        
        return [_board[x1][y1].ship, _board[x2][y2].ship];
    }

    const receiveAttack = (x1,y1) => {
                
        if (typeof _board[x1][y1] === 'object') {
            _shipList[_board[x1][y1].ship].hit(_board[x1][y1].shipIndex);
            _shotsFired[x1][y1] = _HIT;
            return 'HIT';
        }
        else {
            _shotsFired[x1][y1] = _MISS;
            return 'MISS';
        }
    }

    const isAllSunk = () => {
        let allSunk = true;

        for (const ship of _shipList) {
            if (!ship.isSunk()) {
                allSunk = false;
            }
        }
        return allSunk;
    }

    const getShotStatus = (x, y) => {
        if (x >= _BOARDSIZE || y >= _BOARDSIZE) {
            throw new Error('Invalid coordinates received. Out of bounds');
        }
        if (x < 0 || y < 0) {
            throw new Error('Invalid coordinates received. Out of bounds');
        }
        
        let status = _shotsFired[x][y];

        if (status === -1) {
            return 'No shot fired';
        }
        else if (status === _HIT) {
            return 'HIT';
        }
        else if (status === _MISS) {
            return 'MISS';
        }
        else {
            throw new Error('Invalid coordinate received');
        }

        
    }

    const printBoard = () => {
        let boardStr = ''; 

        for (let i = 0; i < _BOARDSIZE; i++) { 
            for (let j = 0; j < _BOARDSIZE; j++) {
                boardStr += _board[i][j] + ', ';
            }
            boardStr += '\n';
        }
        return boardStr;
    }

    const getBoard = () => {
        return _board;
    }

    return {placeShip, receiveAttack, isAllSunk, getShotStatus, printBoard, getBoard};
}

export {Gameboard};