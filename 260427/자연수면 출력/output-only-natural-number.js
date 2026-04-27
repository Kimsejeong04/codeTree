const fs = require('fs');
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const result = [];
if (A > 0) {
    for (let i = 0; i < B; i++) {
        result.push(A);
    }
}
else {
    result.push('0');
}

console.log(result.join(''));