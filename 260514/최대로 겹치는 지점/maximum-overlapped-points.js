const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = new Array(101).fill(0);

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);

    for (let j = a; j <= b; j++) {
        segments[j]++;
    }
}

console.log(Math.max(...segments));