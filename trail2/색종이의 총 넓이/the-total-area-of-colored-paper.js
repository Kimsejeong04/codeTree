const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
let result = 0;

const grid = Array.from({ length: 201 }, () => Array(201).fill(0));

for (let m = 0; m < n; m++) {
    for (let x = rects[m][0]; x < rects[m][0] + 8; x++) {
        for (let y = rects[m][1]; y < rects[m][1] + 8; y++) {
            grid[x + 100][y + 100] = 1;
        }
    }
}


for (let i = 0; i < 201; i++) {
    for (let j = 0; j < 201; j++) {
        if (grid[i][j] == 1) {
            result++;
        }
    }
}
console.log(result);