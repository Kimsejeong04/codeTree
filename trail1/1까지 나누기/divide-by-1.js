const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

//let result = 1;

for (let i = 1; ; i++) {
    input = Math.floor(input / i);
    if (input <= 1) {
        console.log(i);
        break;
    }
}