import {calculator} from "./calcuator.js";

test('add numbers', ()=>{
    expect(calculator.add(20,10)).toBe(30);
})

test('subtract numbers', ()=>{
    expect(calculator.subtract(30,10)).toBe(20);
})

test('multiply numbers', ()=>{
    expect(calculator.multiply(40,22)).toBe(880);
})

test('divide numbers', ()=>{
    expect(calculator.divide(40,20)).toBe(2);
})

test('add strings as numbers', ()=>{
    expect(calculator.add("47","82")).toBe(129);
})

test('calculation on special characters', ()=>{
    expect(calculator.subtract(47,"!")).toBe("Not a number!");
})

test('multiply strings as numbers', ()=>{
    expect(calculator.multiply("90","20")).toBe(1800);
})

test('divide by 0', ()=>{
    expect(calculator.divide(8,0)).toBe("Cannot divide by 0!");
})

test('multiply negatives', ()=>{
    expect(calculator.multiply(40,"-22")).toBe(-880);
})