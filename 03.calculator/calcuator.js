export const calculator = function() {
    const add = (a, b) => {
        if(!isNumber(a,b)){
            return "Not a number!";
        }
        if(typeof(a) === "string" && typeof(b) === "string"){
            a = Number(a);
            b = Number(b);
        }
        return a + b;
    };
    const subtract = (a, b) => {
        if(!isNumber(a,b)){
            return "Not a number!";
        }
        return a - b;
    };
    const multiply = (a, b) => {
        if(!isNumber(a,b)){
            return "Not a number!";
        }
        return a * b;
    };
    const divide = (a, b) => {
        if(b === 0) {
            return "Cannot divide by 0!";
        }
        if(!isNumber(a,b)){
            return "Not a number!";
        }
        return a / b;
    };
    return {add, subtract, multiply, divide};
}();

function isNumber(a,b) {
    if(isNaN(a) || isNaN(b)){
        return false
    } else {
        return true;
    }
}

