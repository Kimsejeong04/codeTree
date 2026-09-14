const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = input[0];
const arr = input[1].split(' ').map(Number);
const result = [];

for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
        result.push(arr[i]);
    }
}

console.log(result.join(' '));