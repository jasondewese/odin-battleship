import { Player } from "./Player";
import { Gameboard } from "./Gameboard";

test('Attack throws error if invalid gameboard', () => {
    const player1 = Player(true);
    const gameboard = 'Not a gameboard';

    expect(() => {player1.attack(0,0)}).toThrow('Invalid gameboard object received');
    expect(() => {player1.attack(gameboard, 0,0)}).toThrow('Invalid gameboard object received');
});

test('Attack correctly calls receive attack on the gameboard object', () => {
    const player1 = Player(true);
    const gameboard = Gameboard();
    gameboard.placeShip(0,0,0,0,0);

   
    expect(player1.attack(gameboard, 0,0)).toBe('HIT');
    expect(player1.attack(gameboard, 2,2)).toBe('MISS');
});

test('Attack prevents multiple attacks on the same square of the grid', () => {
    const player1 = Player(true);
    const gameboard = Gameboard();
    gameboard.placeShip(0,0,0,0,0);

   
    expect(player1.attack(gameboard, 0,0)).toBe('HIT');
    expect(player1.attack(gameboard, 0,0)).toBe('Attack failed. Cannot attack same square twice');
});

