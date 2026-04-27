import {reverseString} from './index.js';

test('String reversal', () => {
    expect(reverseString("silpan")).toBe("naplis");
})

test('Multiple word string reversal', () => {
    expect(reverseString("pechi kuttan")).toBe("nattuk ihcep");
})

test('Empty space reversal', () => {
    expect(reverseString(" ")).toBe(" ");
})

test('String reversal with special character', () => {
    expect(reverseString("Hello World!")).toBe("!dlroW olleH");
})

test('Reversal with numbers and special characters', () => {
    expect(reverseString("1234@BlueSky")).toBe("ykSeulB@4321");
})

