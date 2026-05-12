const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];

const test = parseInt(n, a);
const result = test.toString(b);

console.log(result);