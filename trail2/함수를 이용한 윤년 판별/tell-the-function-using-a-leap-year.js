const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);

function leapYear(y) {
    if (y % 400 === 0) {
        return true;
    }
    else if (y % 100 === 0) {
        return false;
    }
    else if (y % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(leapYear(y));