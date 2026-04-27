export function analyzeArray(arr) {
    if(arr.length === 0) return 0;
    let min = smallest(arr);
    let max = largest(arr);
    let sum = arr.reduce((sum, item) => sum + item, 0);
    let average = Number((sum/arr.length).toFixed(2));
    let length = arr.length;
    return {average, min, max, length}
}

function smallest(arr) {
    let smallestNum = arr[0]; 
    for (let i of arr) {
        if(i < smallestNum) {smallestNum = i}
    }
    return smallestNum;
}

function largest(arr) {
    let largestNum = arr[0];
    for (let i of arr) {
        if(i > largestNum) {largestNum = i}
    }
    return largestNum;
}

console.log(analyzeArray([1.1, 1.2, 1.3]));

