const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let arr = [];
const A = input[0];
const N = input[1];
let basket = A + N;
console.log(basket);

for (let i = 0; i < N - 1; i++) {
    basket += N;
    console.log(basket);
}