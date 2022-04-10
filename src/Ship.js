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
        _sunk = true;
        for (const hit of _hitStatus) {
            if (hit == false) {
                _sunk = false;
            }
        }

        return _sunk;
    }
   

    return {isSunk, hit};
}

export {Ship};