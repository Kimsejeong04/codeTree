let num = 26;
const result = [];

while (num >= 10) {
    result.push(num);
    num -= 1;
}

console.log(result.join(" "));