const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
let month = m1;
let day = d1;
let days = 1;

const calendar = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

while (true) {
    if (month === m2 && day === d2) {
        break;
    }

    days += 1;
    day += 1;

    if (day > calendar[month]) {
        month += 1;
        day = 1;
    }
}

console.log(days);