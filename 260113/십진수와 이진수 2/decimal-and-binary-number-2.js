const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];
let num = 0;
let diameter = 0;

for (let i = 0; i < binaryInput.lenght; i++) {
    num = num * 2 + binaryInput[i];
    diameter = num * 17;
}
console.log(diameter);
