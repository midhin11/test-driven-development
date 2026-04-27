import {capitalize} from './index.js';

test("capitalize single word", ()=> {
    expect(capitalize("word")).toBe("Word");
})

test("capitalize 2 words", ()=> {
    expect(capitalize("another word")).toBe("Another Word");
})

test("capitalize mulitple words", ()=> {
    expect(capitalize("let's try four words")).toBe("Let's Try Four Words");
})

test("already capitalized", ()=> {
    expect(capitalize("Hello")).toBe("Hello");
})

test("capitalize single letter", ()=> {
    expect(capitalize("a")).toBe("A");
})

test("capitalize mixed characters", ()=> {
    expect(capitalize("heLLO")).toBe("HeLLO");
})

test("capitalize", ()=> {
    expect(capitalize("!hello")).toBe("!hello");
})

test("capitalize", ()=> {
    expect(capitalize(" ")).toBe(" ");
})
