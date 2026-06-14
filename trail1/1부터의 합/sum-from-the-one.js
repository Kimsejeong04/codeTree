const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let result = 0;
for (let i = 1; i < 101; i++) {
    result += i;
    if (result >= input) {
        console.log(i);
        break;
    }
}