const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);

function cal(a, b) {
    if (a > b) {
        a += 25;
        b *= 2;
    }
    else{
        a *= 2;
        b += 25;
    }

    return console.log(a, b);
}

cal(a, b)