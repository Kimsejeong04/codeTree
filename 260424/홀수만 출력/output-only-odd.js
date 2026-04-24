const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const result = [];
for (let i = input[0]; i <= input[1]; i++) {
    if (i % 2 !== 0) {
        result.push(i);
    }
}
console.log(result.join(" "));
