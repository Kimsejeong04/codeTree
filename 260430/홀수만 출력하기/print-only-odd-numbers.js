const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const N = input[0];
const result = [];

for (let i = 1; i <= N; i++) {
    let currentNum = input[i];
    if (currentNum % 2 != 0 && currentNum % 3 == 0) {
        result.push(currentNum);
    }
}
console.log(result.join('\n'));