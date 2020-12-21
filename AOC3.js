var fs = require('fs');

function part1(input) {

}

function part2(input) {

}

fs.readFile("inputs/input2.txt", "utf8", (err, data) => {
    
    if (err) 
        throw err;

    let input = [];

    // Transform data
    data.split("\n").forEach(line => {
        if (line != "") {
        }
    });

    part1(input);
    part2(input);
});