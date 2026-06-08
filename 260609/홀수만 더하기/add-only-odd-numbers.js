const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let result = 0;

for (let i = 1; i <= input.length; i++) {
    if (input[i] % 2 != 0 && input[i] % 3 == 0) {
        result += input[i];
    }
}

console.log(result);