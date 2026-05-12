const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));
const blocks = new Array(n + 1).fill(0);

for (let i = 0; i < k; i++) {
    const a = segments[i][0];
    const b = segments[i][1];
    for (let j = a; j <= b; j++) {
        blocks[j] += 1;
    }
}

console.log(Math.max(...blocks));