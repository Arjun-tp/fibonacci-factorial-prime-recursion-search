
// Fibonacci
let fibonacci = function (num) {
    let fib = [0, 1];
    try {
        if (num < 3) {
            return fib
        } else {
            for (let i = 2; i < num; i++) {
                fib[i] = fib[i - 1] + fib[i - 2]
            }
            let sum = fib.reduce((a, b) => a + b)
            return {fib: fib, sum: sum};
        }
    } catch (e) {
        return e
    }
}


console.log("===Fibonacci===")
let fibo = fibonacci(7);
console.log(fibo)



// Factorial
let factorial = function(num){
    let fact = [], factsum
    for(let i=1; i<=num; i++){
        fact[i] = i
        console.log(i)
    }
    
    factsum = fact.reduce((a, b) => a*b);
    return {factsum: factsum};
}

console.log("===Factorial===")
let facto = factorial(10);
console.log(facto)



//Prime number
let primeNumber = function(num){
    let abc = []
    for(let i=2;i<num;i++){
       if (num%i === 0){
        return false;
       } 
    }
    return true 
}

console.log("===Prime===")
let prime = primeNumber(11);
console.log(prime)



// Fibonacci recursion
let fibonacciRecursion = function(num){
    if (num<2) {
        return num;
    }
    return fibonacciRecursion(num-1)+fibonacciRecursion(num-2);
}

console.log("===Recursion Fibonacci===");
let fibRecursion = fibonacciRecursion(10);
console.log(fibRecursion);





// Linear Search
let linearSearch = function(targetElement){ // array =[-5,2,10,4,6]
let arrayDefined = [-5,2,10,4,6];
for (let i = 0; i < arrayDefined.length; i++) {
    if (targetElement === arrayDefined[i]){return i}
}
return -1
}
console.log("===Linear Search===");
let linear = linearSearch(99)
console.log(linear);



