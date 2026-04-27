import {analyzeArray} from './analyze-array.js';

test("Normal array", () => {
    expect(analyzeArray([1,3,4,2,5,9])).toEqual({
        average: 4,
        min: 1,
        max: 9,
        length: 6
    });
})

test("Single element", () => {
    expect(analyzeArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
    });
})

test("Same number array", () => {
    expect(analyzeArray([7, 7, 7, 7])).toEqual({
        average: 7,
        min: 7,
        max: 7,
        length: 4
    });
})

test("Including negatives", () => {
    expect(analyzeArray([-5, 0, 10])).toEqual({
        average: 1.67,
        min: -5,
        max: 10,
        length: 3
    });
})

test("Empty array", () => {
    expect(analyzeArray([])).toEqual(0);
})

test("Including decimals", () => {
    expect(analyzeArray([1.5, 2.5, 3])).toEqual({
        average: 2.33,
        min: 1.5,
        max: 3,
        length: 3
    });
})