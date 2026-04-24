const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = parseInt(input);
const result = [];

for (let i = 1; i <= 5; i++) {
    result.push(n * i);
}

console.log(result.join(" "))