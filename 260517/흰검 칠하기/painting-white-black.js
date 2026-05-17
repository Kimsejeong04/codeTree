const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const black_block = new Array(200001).fill(0);  //1
const white_block = new Array(200001).fill(0);  //2
const last_block = new Array(200001).fill(0);

let current = 100000;

for (let i = 1; i <= n; i++) {
    const [dist_S, direction] = input[i].split(' ');
    const dist = Number(dist_S);

    if (direction == 'R') {
        for (let j = current; j < current + dist; j++) {
            black_block[j]++;
            last_block[j] = 1;
        }
        current += (dist - 1);
    }
    else if (direction == 'L') {
        for (let k = current - dist + 1; k <= current; k++) {
            white_block[k]++;
            last_block[k] = 2;
        }
        current -= (dist - 1);
    }
}

let white = 0, black = 0, gray = 0;
for (let m = 0; m < 200001; m++) {
    if (white_block[m] >= 2 && black_block[m] >= 2) {
        gray++;
    }
    else if (last_block[m] == 1) {
        black++;
    }
    else if (last_block[m] == 2) {
        white++;
    }
}

console.log(white, black, gray);