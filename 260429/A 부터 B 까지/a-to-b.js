const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let A = input[0];
const B = input[1];
const result = [];

while (A <= B) {
    result.push(A);
    if (A % 2 !== 0) {
        A *= 2;
    }
    else {
        A += 3;
    }
}

console.log(result.join(' '));