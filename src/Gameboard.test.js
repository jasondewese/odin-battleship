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
    gameboard.placeShip(0,0,0,1,1);
    gameboard.placeShip(2,2,2,4,2);

    expect(gameboard.receiveAttack(0,0)).toBe('HIT');
    expect(gameboard.receiveAttack(7,7)).toBe('MISS');
});

test('receiveAttack calls Ship.hit on appropriate ship if a hit occurs', () => {
    let gameboard = Gameboard();
    gameboard.placeShip(0,0,0,1,1);
    gameboard.placeShip(2,2,2,4,2);
    expect(gameboard.receiveAttack(0,0)).toBe('HIT');
    expect(gameboard.receiveAttack(0,5)).toBe('MISS');

});