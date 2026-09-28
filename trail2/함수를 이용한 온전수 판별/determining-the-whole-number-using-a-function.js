const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

function perNum(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if ((i % 2 !== 0) && (i % 10 !== 5) && (i % 3 !== 0 || i % 9 === 0)) {
            count++;
        }
    }
    return count;
}

console.log(perNum(a, b))