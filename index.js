function swapValues(a, b) {
    return [b, a];
}

// Uso
let [x, y] = swapValues(10, "Hello");
console.log(x); // "Hello"
console.log(y); // 10
