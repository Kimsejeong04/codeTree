const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let odd_sum = 0;
let even_sum = 0;
let result = 0;

for (let i = 0; i < input.length; i++) {
    if (i % 2 - 1 == 0) {
        odd_sum += input[i];
    }
    if (i % 2 - 1 != 0) {
        even_sum += input[i];
    }
}

if (odd_sum > even_sum) {
    result = odd_sum - even_sum;
}
else {
    result = even_sum - odd_sum;
}

console.log(result);