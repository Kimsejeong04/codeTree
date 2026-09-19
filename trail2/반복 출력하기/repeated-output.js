const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function printString(n) {
    console.log('12345^&*()_');
}

for (let i = 0; i < n; i++) {
    printString();
}