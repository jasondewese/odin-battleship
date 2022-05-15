const displayController = (() => {
    const message = document.querySelector('.message-text');

    const placeShipsMessage = () => {
        message.textContent = 'Click the board to place your ships. Click "Rotate Ship" to change direction.';
    }

    const shotResult = (shot, x, y) => {
        message.textContent = shot;
       
    }

    const addCurrentTurnToMessage = (turn) => {
        if (turn === 'PLAYER') {
            message.textContent += '. Player turn. Click a square to launch an attack!';
        }
        else {
            message.textContent += '. Computer taking turn. Attacking...';
        }
        
    }

    const displayMessage = (msg) => {
        message.textContent = msg;
    }

    const addShipSunkMessage = () => {
        message.textContent += '. You sunk a ship!';
    }

    return {placeShipsMessage, shotResult, addCurrentTurnToMessage, displayMessage, addShipSunkMessage};
})();

export {displayController};