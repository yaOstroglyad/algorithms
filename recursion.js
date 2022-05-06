// factorial - 1 * 2 * 3 * 4 * 5

const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));


// eToro factorial:

console.log((function f(n){
    return n > 1 ? n * f(n - 1) : n;
})(5))


// fibonacci - 1,1,2,3,5,8,13,21

const fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(8))

