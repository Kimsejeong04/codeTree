const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, n + 1).join(' ').split(' ').map(Number);
//const result = [];

for (let i = 0; i < n; i++) {
    num[i] *= num[i];
}

console.log(num.join(' '));