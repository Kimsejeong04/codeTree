const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const block = new Array(2001).fill(0);

let current = 1000;

for (let i = 1; i <= n; i++) {
    const [dist_S, direction] = input[i].split(' ');
    const dist = Number(dist_S);

    if (direction == 'R') {
        for (let j = current; j < current + dist; j++) {
            block[j]++;
        }
        current += dist;
    }
    else if (direction == 'L') {
        for (let k = current - dist; k < current; k++) {
            block[k]++;
        }
        current -= dist;
    }
}

let result = 0;

for (let i = 0; i <= 2000; i++) {
    if (block[i] >= 2) {
        result++;
    }
}

console.log(result);