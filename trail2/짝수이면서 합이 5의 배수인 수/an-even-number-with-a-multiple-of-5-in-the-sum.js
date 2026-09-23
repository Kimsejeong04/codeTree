const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function result(input) {
    const multiple = Number(input[0]) + Number(input[1]);
    if ((input % 2 === 0) && (multiple % 5 === 0)) {
        return "Yes";
    }
    else {
        return "No";
    }
}

console.log(result(input));