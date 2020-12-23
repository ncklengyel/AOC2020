var fs = require('fs');

const tree = '#';

function part1(input) {
    let trees = treesOnSlope(3, 1, input);
    console.log("Part 1 :", trees);
}

function part2(input) {
    const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
    let treeArray = [];
    slopes.forEach(slope => treeArray.push(treesOnSlope(slope[0], slope[1], input)));
    console.log("Part 2: ", treeArray.reduce((a, b) => a * b, 1));
}

function treesOnSlope(rightInc, downInc, input) {
    let trees = 0;
    let position = {x: 0, y: 0};

    while (position.y < input.length) {
        const xx = position.x % input[0].length;
        let area = input[position.y][xx];

        if (area == tree)
        {
            trees++;
        }

        position.x += rightInc;
        position.y += downInc;
    }

    return trees;
}

fs.readFile("inputs/input3.txt", "utf8", (err, data) => {
    let input = data.split('\n');

    part1(input);
    part2(input);
});