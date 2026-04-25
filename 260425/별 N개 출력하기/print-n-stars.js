const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let loop = 1;
while (loop <= input) {
    console.log("*");
    loop++;
}