const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const arr = [];

for(let i = input.length; i > -1; i--){
    arr.push(input[i]);
}

console.log(arr.join(''))