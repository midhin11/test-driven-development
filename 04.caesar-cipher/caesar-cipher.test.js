import {caesarCipher} from './caesar-cipher.js';

test('Basic cipher', ()=>{
    expect(caesarCipher("abcABC", 3)).toBe("defDEF");
});

test('Numbers should remain same', ()=>{
    expect(caesarCipher("Pass99!", 1)).toBe("Qbtt99!");
});

test('Caeser cipher with special character', ()=>{
    expect(caesarCipher("HBC Swza!", 4)).toBe("LFG Wade!");
});

test('Zero shift', ()=>{
    expect(caesarCipher("Hello123!", 0)).toBe("Hello123!");
});

test('High negative', ()=>{
    expect(caesarCipher("abc", -28)).toBe("yza");
});

test('Shift above 26', ()=>{
    expect(caesarCipher("Hello", 55)).toBe("Khoor");
});