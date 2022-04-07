import {Ship} from './Ship';



test('Ship hit function', () => {
    const ship1 = Ship(3);
    ship1.hit(1);
    const hitStatus = ship1.getHitStatus();

    expect(hitStatus).toStrictEqual([false,true,false]);
});