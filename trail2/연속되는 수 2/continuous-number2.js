const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let count = 0;
let temp = arr[0];
let max = 0;

for (let i = 0; i < n; i++) {
    if (temp == arr[i]) {
        count++;
    }
    else {
        temp = arr[i];
        count = 1;
    }
    
    if(count > max){
        max = count;
    }
}
console.log(max);