const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const result = [];
let i = 1;

while (i <= input) {
    result.push(i);
    i++;
}

console.log(result.join(" "))