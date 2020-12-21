var fs = require('fs');

function part1(input) {
    input.some((i) => {
        let j = input.find((j) => { return i+j == 2020; });
        if (j) { 
            console.log("Part 1: " + i*j);
            return true;
        }
    });
}

function part2(input) {
    input.some(i => {
        let found = false;
        input.some(j => {
            let k = input.find(k => { return i+j+k == 2020; });
            if (k) {
                console.log("Part 2: " + i*j*k);
                found = true;
                return true;
            }
        });
        return found;
    });
}

fs.readFile("inputs/input1.txt", "utf8", (err, data) => {
    if (err) throw err;
    let input = data.split("\n").map((i) => (parseInt(i)));
    part1(input);
    part2(input);
});