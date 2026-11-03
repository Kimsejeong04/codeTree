const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(false));
visited[0][0] = true;

let found = false;
const queue = [];
queue.push([0, 0, 0]);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    if (x === n - 1 && y === m - 1) {
        console.log(count);
        found = true;
        break;
    }

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || n <= nx || ny < 0 || m <= ny) {
            continue;
        }
        if (grid[nx][ny] === 0) {
            continue;
        }
        if (visited[nx][ny]) {
            continue;
        }
        visited[nx][ny] = true;
        queue.push([nx, ny, count + 1]);
    }
}

if (!found) {
    console.log(-1);
}