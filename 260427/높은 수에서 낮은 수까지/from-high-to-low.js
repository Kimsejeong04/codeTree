const fs = require('fs');
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const max = Math.max(A, B);
const min = Math.min(A, B);
const result = [];

for (let i = max; i >= min; i--) {
    result.push(i);
}

console.log(result.join(' '));