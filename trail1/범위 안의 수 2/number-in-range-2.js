const fs = require("fs");
const input = fs.readFileSync(0).toString().split('\n').map(Number);

let sum = 0;
let count = 0;

for (let i = 0; i < 10; i++) {
    if (input[i] >= 0 && input[i] <= 200) {
        sum += input[i];
        count++;
    }
}
const avg = sum / count;


console.log(sum, avg.toFixed(1));