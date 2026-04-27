const fs = require('fs');
const [C, N] = fs.readFileSync(0).toString().trim().split(' ');

const result = [];
if (C == 'A') {
    for (let i = 1; i <= N; i++) {
        result.push(i);
    }
}
else {
    for (let j = N; j > 0; j--) {
        result.push(j);
    }
}

console.log(result.join(' '));