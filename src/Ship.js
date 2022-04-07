const Ship = (shipLength) => {

    const _length = shipLength;
    let _sunk = false;
    let _hitStatus = [];

    const _initializeStatus = (() => {
        let hits = [];
        for (let i = 0; i < _length; i++) {
            _hitStatus.push(false);
        }
    })();


    const hit = (index) => {
        _hitStatus[index] = true;
        return _hitStatus;
    }

    

    const isSunk = () => {
        
    }
   

    return {isSunk, hit};
}

export {Ship};