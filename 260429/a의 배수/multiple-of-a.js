const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const result = [];
let i = 1;

while (i <= input[0]) {
    if (i % input[1] == 0) {
        result.push('1');
    }
    else {
        result.push('0');
    }
    i++;
}

console.log(result.join('\n'));