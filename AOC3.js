var fs = require('fs');

function part1(input) {
    let trees = 0, tree = '#', index = 0, increment = 3;
    input.shift(); // remove first line
    input.forEach(line => {
        if (line != '') {
            index = index + increment;
            index = index >= line.length ? index - line.length : index;
            trees = line[index] == tree ? trees + 1 : trees;
        }
    });

    console.log("Part 1 :", trees);
}

function part2(input) {

}

fs.readFile("inputs/input3.txt", "utf8", (err, data) => {
    
    if (err) 
        throw err;

    // Transform data
    let input = data.split("\n");

    part1(input);
    part2(input);
});