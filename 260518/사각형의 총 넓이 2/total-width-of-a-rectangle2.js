const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const set = 1000;
const grid = Array.from(Array(2001), () => Array(2001).fill(0));

for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);

    const start_x = x1 + set;
    const start_y = y1 + set;
    const end_x = x2 + set;
    const end_y = y2 + set;

    for (let j = start_x; j < end_x; j++) {
        for (let k = start_y; k < end_y; k++) {
            grid[j][k] = 1;
        }
    }
}

let result = 0;
for (let j = 0; j < 2001; j++) {
    for (let k = 0; k < 2001; k++) {
        if (grid[j][k] >= 1) {
            result++;
        }
    }
}

console.log(result);