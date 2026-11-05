const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let minSum = Infinity;

for (let i = 0; i < n; i++) {
    let diffSum = 0;
    for (let j = 0; j < arr.length; j++) {
        let diff = Math.abs(j - i)
        diffSum += arr[j] * diff
    }
    if (diffSum < minSum) {
        minSum = diffSum;
    }
}

console.log(minSum);