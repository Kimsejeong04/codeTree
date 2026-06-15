const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

for (let i = 0; i < input.length; i++) {
    if (input[i] == 0){
        break;
    }
    console.log(input[i]);
}
