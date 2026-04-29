const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const result = [];

for (let i = 1; i <= input; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
        result.push('1');
    }
    else {
        result.push('0')
    }
}

console.log(result.join(' '));