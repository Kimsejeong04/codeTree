const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = parseInt(input);

let result = [];

for (let i = n; i <= 100; i++) {
    result.push(i);
}

console.log(result.join(" "));