const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = parseInt(input[0]);
result = [];

for (let i = 1; i <= 5; i++) {
    result.push(n * i);
}

console.log(result.join(" "))