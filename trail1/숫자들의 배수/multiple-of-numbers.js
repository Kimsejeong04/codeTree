const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split().map(Number);

let count = 0;
let current = input[0];
const arr = [];

while (count < 2) {
    //current += current;
    arr.push(current);

    if (current % 5 === 0) {
        count++;
    }
    current += input[0];
}
console.log(arr.join(' '));