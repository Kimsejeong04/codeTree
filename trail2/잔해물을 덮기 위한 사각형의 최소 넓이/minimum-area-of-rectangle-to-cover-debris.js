const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

const grid = Array.from({ length: 2001 }, () => Array(2001).fill(0));

let minX = 2001;
let maxX = -1;
let minY = 2001;
let maxY = -1;

for (let x = rect1[0]; x < rect1[2]; x++) {
    for (let y = rect1[1]; y < rect1[3]; y++) {
        grid[1001 + x][1001 + y] = 1;
    }
}

for (let x = rect2[0]; x < rect2[2]; x++) {
    for (let y = rect2[1]; y < rect2[3]; y++) {
        grid[1001 + x][1001 + y] = 0;
    }
}

for (let i = 0; i < 2001; i++) {
    for (let j = 0; j < 2001; j++) {
        if (grid[i][j] == 1) {
            if (minX > i) {
                minX = i;
            }
            if (maxX < i) {
                maxX = i;
            }
            if (minY > j) {
                minY = j;
            }
            if (maxY < j) {
                maxY = j;
            }
        }
    }
}

if (maxX == -1) {
    console.log(0);
} else {
    console.log((maxX - minX + 1) * (maxY - minY + 1));
}