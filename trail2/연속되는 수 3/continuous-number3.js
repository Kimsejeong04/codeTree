const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

let count = 0;
let max = 0;
let temp = arr[0];

for (let i = 0; i < n; i++) {
    if ((temp > 0 && arr[i] > 0) || (temp < 0 && arr[i] < 0)) {
        count++;
    }
    else {
        temp = arr[i];
        count = 1;
    }

    if (count > max) {
        max = count;
    }
}
console.log(max);