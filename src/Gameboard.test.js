import { Gameboard } from "./Gameboard";

test('placeShip creates object at given coordinates', () => {
    let gameboard = Gameboard();
    expect(gameboard.placeShip(0,0,0,1,1)).toEqual([0,0]);
    expect(gameboard.placeShip(2,2,2,4,2)).toEqual([2,2]);
});

test('placeShip returns error for invalid ship or coordinates', () => {
    let gameboard = Gameboard();
    expect(() => {gameboard.placeShip(6,2,2,4,2)}).toThrow('No ship exists at provided index');
    expect(() => {gameboard.placeShip(1,12,2,4,2)}).toThrow('Invalid coordinates received. Out of bounds');

});

test('receiveAttack determines hit or miss properly', () => {
    let gameboard = Gameboard();
    gameboard.placeShip(0,0,0,1,0);
    gameboard.placeShip(2,2,2,4,2);

    expect(gameboard.receiveAttack(0,0)).toBe('HIT');
    expect(gameboard.receiveAttack(7,7)).toBe('MISS');
});


test('isAllSunk returns true if all ships sunk, false otherwise', () => {
    let gameboard = Gameboard();
    
    //place all 5 ships
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            gameboard.placeShip(i,0,i,i+1,i); 
        }
        else {
            gameboard.placeShip(i,0,i,i,i);
        }
        
    }

    //sink all 5 ships
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            expect(gameboard.isAllSunk()).toBe(false);
            gameboard.receiveAttack(j,i);
            if (i === 0) {
                gameboard.receiveAttack(j+1,i);
            }
        }
    } 
    //console.log(gameboard.printBoard());
    expect(gameboard.isAllSunk()).toBe(true);
});

test('getShotStatus returns "HIT" for hit, "MISS" for miss, or "No shot fired"', () => {
    let gameboard = Gameboard();
    gameboard.placeShip(0,0,0,1,0);
    gameboard.receiveAttack(0,0);
    gameboard.receiveAttack(5,5);


    expect(gameboard.getShotStatus(0,0)).toBe('HIT');
    expect(gameboard.getShotStatus(5,5)).toBe('MISS');
    expect(gameboard.getShotStatus(8,8)).toBe('No shot fired');
    expect(() => {gameboard.getShotStatus(11,11)}).toThrow('Invalid coordinates received. Out of bounds');
});