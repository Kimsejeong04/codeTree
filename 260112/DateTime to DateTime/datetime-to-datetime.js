const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

//let month = 11;
let day = 11;
let hour = 11;
let min = 11;
let time = 0;

const startTimeVal = 11 * 24 * 60 + 11 * 60 + 11;
const targetTimeVal = A * 24 * 60 + B * 60 + C;

if (targetTimeVal < startTimeVal) {
    console.log(-1);
} else {
    while (true) {
        if (day === A && hour === B && min === C) {
            break;
        }

        time++;
        min++;

        if (min === 60) {
            min = 0;
            hour++;
        }

        if (hour === 24) {
            hour = 0;
            day++;
        }
    }

    console.log(time);
}