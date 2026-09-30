const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];

function palindrome(str) {
    let temp = '';

    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }

    return temp;
}

let _str = palindrome(str);

if (str === _str) {
    console.log('Yes');
}
else {
    console.log("No");
}