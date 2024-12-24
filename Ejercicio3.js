function filterArray(array, condition) {
    return array.filter(condition);
}

// Uso
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const strings = ["apple", "banana", "cherry"];
const filteredStrings = filterArray(strings, str => str.includes("a"));
console.log(filteredStrings); // ["apple", "banana"]
