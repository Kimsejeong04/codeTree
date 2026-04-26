const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const result = [];

while (input >= 1) {
    result.push(input);
    input--;
}

console.log(result.join(" "));