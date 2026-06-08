const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

let result = 0;

for (let i = input; i <= 100; i++) {
    result += i;
}

console.log(result);