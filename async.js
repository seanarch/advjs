const fs = require('fs');

function readFile() {
    let fileData;

    // fileData = fs.readFileSync('data.txt');

    fs.readFile('data.txt', function (error, fileData) {
        console.log('File parsing done!');
        console.log(fileData.toString());
    });

    console.log('Hi there!');
}

readFile();