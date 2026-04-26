const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const result = [];

for (let i = 3; i <= input; i += 3) {
    result.push(i);
}

console.log(result.join(" "));