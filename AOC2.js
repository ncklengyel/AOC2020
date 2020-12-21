var fs = require('fs');

function part1(input) {
    let counter = 0;
    input.forEach(obj => {
        let r = new RegExp(obj.char, "g");
        let matchs = obj.pass.match(r);
        if (matchs && matchs.length >= obj.rep1 && matchs.length <= obj.rep2)
            counter = counter + 1;
    });

    console.log("Part 1: ", counter);
}

function part2(input) {
    let counter = 0;
    input.forEach(o => {
        if (o.pass[o.rep1 - 1] == o.char && o.pass[o.rep2 - 1] != o.char ||
            o.pass[o.rep2 - 1] == o.char && o.pass[o.rep1 - 1] != o.char)
            counter = counter + 1;
    });

    console.log("Part 2: ", counter);
}

fs.readFile("inputs/input2.txt", "utf8", (err, data) => {
    if (err) throw err;

    let input = [];

    data.split("\n").forEach(line => {
        if (line != "") {
            let l = line.split(" ");
            input.push({ rep1: l[0].split('-')[0], rep2: l[0].split('-')[1], char: l[1].substr(0, 1), pass: l[2] });
        }
    });

    part1(input);
    part2(input);
});