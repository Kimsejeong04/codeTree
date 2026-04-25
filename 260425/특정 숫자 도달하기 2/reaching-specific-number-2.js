const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const result = [];

for (let i = input[0]; i > 0; i--) {
    result.push(i);
}

console.log(result.join(" "));