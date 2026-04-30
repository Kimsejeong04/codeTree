const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let cnt_3 = 0;
let cnt_5 = 0;

for (let i = 0; i < 10; i++) {
    let current = input[i];

    if (current % 3 == 0) {
        cnt_3++;
    }
    if (current % 5 == 0) {
        cnt_5++;
    }
}

console.log(cnt_3, cnt_5);