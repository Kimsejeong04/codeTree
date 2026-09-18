const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let reverseArr = [];
let zero = 0;
for (let j = 0; j < input.length; j++) {
    if (input[j] == 0) {
        break;
    }
    zero++;
}

for (let i = zero - 1; i >= 0; i--) {
    reverseArr.push(input[i]);
}

console.log(reverseArr.join(' '));