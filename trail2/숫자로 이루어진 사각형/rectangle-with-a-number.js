const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

function rect(N) {
    for (let i = 0; i < N; i++) {
        let str = '';
        for (let j = 0; j < N; j++) {
            let num = (i * N + j) % 9 + 1;
            str += num + ' ';
        }
        console.log(str);
    }
}

rect(N);