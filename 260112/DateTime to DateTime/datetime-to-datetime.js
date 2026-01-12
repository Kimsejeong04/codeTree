const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

let month = 11;
let day = 11;
let hour = 11;
let min = 11;
let time = 0;

while (true) {
    if (day === A && hour === B && min === C) {
        //console.log(time);
        break;
    }

    if (day > A) {
        console.log(-1);
        break;
    }

    time += 1;
    min += 1;

    if (min === 60) {
        min = 0;
        hour += 1;
    }

    if (hour === 24) {
        hour = 0;
        day += 1;
    }
}

console.log(time);