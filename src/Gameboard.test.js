import { Gameboard } from "./Gameboard";

test('placeShip creates object at given coordinates', () => {

    let gameboard = Gameboard();
    expect(gameboard.placeShip(0,0,0,1,1)).toBe();

});