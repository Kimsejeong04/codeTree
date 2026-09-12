const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let arr = [];
for (let i = 0; i < 2; i++) {
    arr.push(input[i]);
}
for (let j = 2; j < 10; j++) {
    arr.push((arr[j - 2] + arr[j - 1]) % 10);
}

console.log(arr.join(' '));