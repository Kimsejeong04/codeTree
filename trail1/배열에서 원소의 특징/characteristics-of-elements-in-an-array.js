const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 == 0) {
        console.log(input[i - 1]);
        break;
    }
}