const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const arr = [];
for (let i = 0; i < input.length; i++) {
    if(input[i] == 0){
        break;
    }
    else if(input[i] % 2 != 0){
        arr.push(input[i] + 3);
    }
    else if (input[i] % 2 == 0) {
        arr.push(input[i] / 2);
    }
    
}

console.log(arr.join(' '));    