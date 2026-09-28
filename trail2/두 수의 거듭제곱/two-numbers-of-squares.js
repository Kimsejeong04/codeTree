const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);

function square(a, b) {
    let sum = a;
    for (let i = 1; i < b; i++) {
        sum *= a;
    }

    return sum;
}

console.log(square(a, b));