const mathLogic = (() => {

    //min inclusive, max exclusive
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return {getRandomInt}
})();

export {mathLogic};