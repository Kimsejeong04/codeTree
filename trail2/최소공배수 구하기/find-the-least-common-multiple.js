const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
const product = n * m;

function gcd(n, m) {
    while (m !== 0) {
        let temp = m;
        m = n % m;
        n = temp;
    }

    return n;
}

console.log(product / gcd(n, m));