const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

let digits = [];

while (true) {
    if (n < 4) {
        digits.push(n);
        break;
    }

    digits.push(n % 4);
    n = Math.floor(n / 4);
}

let binaryNumber = '';
for (let i = digits.length - 1; i >= 0; i--) {
    binaryNumber += digits[i];
}

console.log(binaryNumber);

