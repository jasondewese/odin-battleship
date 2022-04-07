import {Ship} from './Ship';



test('Ship hit function', () => {
    const ship1 = Ship(3);
    
    expect(ship1.hit(1)).toStrictEqual([false,true,false]);
});