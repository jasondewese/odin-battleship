const Ship = (shipLength) => {

    const _length = shipLength;
    let _sunk = false;
    let _hitStatus = [];

    const _initializeStatus = (() => {
        let hits = [];
        for (let i = 0; i < length; i++) {
            _hitStatus.push(false);
        }
    })();


    const hit = (index) => {
        _hitStatus[index] = true;
    }

    const getHitStatus = () => {
        return _hitStatus;
    }

    const isSunk = () => {
        
    }
   

    return {isSunk, getHitStatus, hit};
}

export {Ship};