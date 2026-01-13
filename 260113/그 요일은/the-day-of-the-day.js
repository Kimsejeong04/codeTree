const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const toDay = input[1];
let month = m1, day = d1;
let count = 0;
let elapsed_days = 0;
//let is_reverse = false;

// if (m2 < m1 || (m2 === m1 && d2 < d1)) {
//     month = m2; day = d2;
//     endM = m1; endD = d1;
//     is_reverse = true;
// }
const num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const week_days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

while (true) {
    if (week_days[elapsed_days % 7] === toDay) {
        count++;
    }

    if (month === m2 && day === d2) {
        break;
    }

    elapsed_days += 1;
    day += 1;

    if (day > num_of_days[month]) {
        month += 1;
        day = 1;
    }
}
console.log(count);