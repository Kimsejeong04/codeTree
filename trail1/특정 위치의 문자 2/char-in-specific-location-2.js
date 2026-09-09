const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');
let result = [];

for (let i = 0; i < input.length; i++) {
    if(i == 1 || i == 4 || i == 7){
        result.push(input[i]);
    }
}

console.log(result.join(' '));