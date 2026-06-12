const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = 1;

for(let i = input[0]; i <= input[1]; i++){
    if(i % input[0] == 0){
        result *= i;
    }
}

console.log(result);