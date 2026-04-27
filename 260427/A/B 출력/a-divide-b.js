const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];

let result = Math.floor(a / b) + ".";
let remainder = a % b;

for (let i = 0; i < 20; i++) {
    remainder *= 10;
    result += Math.floor(remainder / b);
    remainder %= b;
}

console.log(result);