const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

let digits = [];

while (true) {
    if (n < b) {
        digits.push(n);
        break;
    }

    digits.push(n % b);
    n = Math.floor(n / b);
}

let binaryNumber = '';
for (let i = digits.length - 1; i >= 0; i--) {
    binaryNumber += digits[i];
}

console.log(binaryNumber);