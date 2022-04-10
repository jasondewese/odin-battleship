import {Ship} from './Ship';


test('Ship hit function change index from false to true', () => {
    const ship1 = Ship(3);
    
    expect(ship1.hit(1)).toStrictEqual([false,true,false]);
});

test('Ship isSunk returns true if all spaces hit', () => {
    const ship1 = Ship(2);
    ship1.hit(0);
    expect(ship1.isSunk()).toBe(false);
    ship1.hit(1);
    expect(ship1.isSunk()).toBe(true);
});

