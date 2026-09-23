const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

let result = 0;
function sum (n){
    for(let i = 1; i <= n; i++){
        result += i;
    }
    return Math.floor(result / 10);
}

console.log(sum(n));