const Player = (isHuman) => {

    const _isHuman = isHuman;

    const _isAttackLegal = (gameboard, x,y) => {
        if (!gameboard.hasOwnProperty('placeShip')) {
            throw new Error('Invalid gameboard object received');
        }

        if(gameboard.getShotStatus(x,y) === 'HIT' || gameboard.getShotStatus(x,y) === 'MISS') {
            return false;
        }
        else {
            return true;
        }
    }

    const attack = (gameboard, x,y) => {
        if (!gameboard.hasOwnProperty('placeShip')) {
            throw new Error('Invalid gameboard object received');
        }

        if (_isAttackLegal(gameboard, x, y)) {
            gameboard.receiveAttack(x,y);
            return gameboard.getShotStatus(x,y);
        }
        else {
            return 'Attack failed. Cannot attack same square twice';
        }
         
        
    }

    const isPlayerHuman = () => {
        return _isHuman;
    }


    return {attack, isPlayerHuman};
}

export {Player};