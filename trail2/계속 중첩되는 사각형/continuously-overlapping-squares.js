const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}

let count = 0
const grid = Array.from({ length: 201 }, () => Array(201).fill(0));

for (let i = 0; i < n; i++) {
    for (let x = rectangles[i][0]; x < rectangles[i][2]; x++) {
        for (let y = rectangles[i][1]; y < rectangles[i][3]; y++) {
            if (i % 2 == 0) {
                grid[x + 101][y + 101] = 1;
            }
            else {
                grid[x + 101][y + 101] = 2;
            }
        }
    }
}

for (let i = 0; i < 201; i++) {
    for (let j = 0; j < 201; j++) {
        if (grid[i][j] == 2) {
            count++;
        }
    }
}

console.log(count);