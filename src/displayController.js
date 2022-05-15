const displayController = (() => {
    const message = document.querySelector('.message-text');

    const placeShipsMessage = () => {
        message.textContent = 'Click the board to place your ships. Click "Rotate Ship" to change direction.';
    }

    const shotResult = (shot, x, y) => {
        message.textContent = shot;
        //message.textContent += `. Attack received at ${x},${y}. `;
    }

    const addCurrentTurnToMessage = (turn) => {
        message.textContent += '. ' + turn + ' turn.';
    }

    const displayMessage = (msg) => {
        message.textContent = msg;
    }

    return {placeShipsMessage, shotResult, addCurrentTurnToMessage, displayMessage};
})();

export {displayController};