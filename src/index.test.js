import {sum} from './index';

test('sum a and b', () => {
    expect(sum(10,5)).toBe(15);
    expect(sum(5,-7)).toBe(-2);
});