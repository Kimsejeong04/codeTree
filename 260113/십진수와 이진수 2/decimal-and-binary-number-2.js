const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];
let num = 0;
let diameter = 0;

for (let i = 0; i < binaryInput.length; i++) {
    num = num * 2 + Number(binaryInput[i]);
}
diameter = num * 17;

let digits = [];

while (true) {
    if (diameter < 2) {
        digits.push(diameter);
        break;
    }

    digits.push(diameter % 2);
    diameter = Math.floor(diameter / 2);
}

// 이진수 출력
let binaryNumber = '';
for (let i = digits.length - 1; i >= 0; i--) {
    binaryNumber += digits[i];
}

console.log(binaryNumber);


//console.log(num);
