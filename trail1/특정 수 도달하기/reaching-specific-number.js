const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;
let count = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] >= 250) {
        break;
    }
    else {
        sum += input[i];
        count++;
    }
}

const avg = sum / count; 
console.log(sum, avg.toFixed(1));