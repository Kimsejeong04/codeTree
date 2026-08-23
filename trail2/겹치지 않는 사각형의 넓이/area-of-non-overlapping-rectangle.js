const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

let result = 0;
const grid = Array.from({ length: 2001 }, () => Array(2001).fill(0));
for (let x = rectA[0]; x < rectA[2]; x++) {
    for (let y = rectA[1]; y < rectA[3]; y++) {
        grid[x + 1000][y + 1000] = 1;
    }
}

for (let x = rectB[0]; x < rectB[2]; x++) {
    for (let y = rectB[1]; y < rectB[3]; y++) {
        grid[x + 1000][y + 1000] = 1;
    }
}

for (let x = rectM[0]; x < rectM[2]; x++) {
    for (let y = rectM[1]; y < rectM[3]; y++) {
        grid[x + 1000][y + 1000] = 0;
    }
}

for (let i = 0; i < 2001; i++) {
    for (let j = 0; j < 2001; j++) {
        if (grid[i][j] === 1) {
            result++;
        }
    }
}
console.log(result);