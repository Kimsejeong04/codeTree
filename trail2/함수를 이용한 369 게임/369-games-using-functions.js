const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

function multipleCount(A, B) {
    let count = 0;
    for (let i = A; i < B + 1; i++) {
        if (i % 3 === 0 || i.toString().includes('3') || i.toString().includes('6') || i.toString().includes('9')) {
            count++;
        }
    }
    return count;
}

console.log(multipleCount(A, B));