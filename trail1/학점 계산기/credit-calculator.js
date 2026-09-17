const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grades = input[1].split(' ').map(Number);

let sum = 0;
let avg = 0;
for (let i = 0; i < n; i++) {
    sum += grades[i];
    avg = sum / n;

}


if (avg >= 4.0) {
    console.log(avg.toFixed(1));
    console.log('Perfect');
}
else if (avg >= 3.0) {
    console.log(avg.toFixed(1));
    console.log('Good');
}
else {
    console.log(avg.toFixed(1));
    console.log('Poor');
}