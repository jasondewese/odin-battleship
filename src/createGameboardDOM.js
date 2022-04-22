const createGameboardDOM = (() => {

    const _createPlayerBoard = () => {
        const boardWrapper = document.querySelector('.player-board');
        //default desktop height/width in px
        

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const boardCell = document.createElement('div');
                boardCell.classList.add('board-cell');

                boardWrapper.appendChild(boardCell);
            }
        }

    }

    const _createCompBoard = () => {
        const boardWrapper = document.querySelector('.computer-board');
        //default desktop height/width in px
        

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const boardCell = document.createElement('div');
                boardCell.classList.add('board-cell');

                boardWrapper.appendChild(boardCell);
            }
        }
    }

    const initBoards = () => {
        _createPlayerBoard();
        _createCompBoard();
    }

    return {initBoards};
})();

export {createGameboardDOM};