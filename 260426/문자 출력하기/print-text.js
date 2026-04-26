const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const result = [];

for (let i = 0; i < 8; i++) {
    result.push(input);
}

console.log(result.join(''));