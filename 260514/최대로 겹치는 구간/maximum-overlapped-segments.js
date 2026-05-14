const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
//const segments = [];

const blocks = new Array(201).fill(0);

for (let i = 1; i <= n; i++) {
    [a, b] = input[i].split(' ').map(Number);
    const start = a + 100;
    const end = b + 100;
    for (let j = start; j < end; j++) {
        blocks[j]++;
    }
}

console.log(Math.max(...blocks));