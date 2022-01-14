const fs = require('fs/promises');

async function readFile() {
    let fileData;

    // fileData = fs.readFileSync('data.txt');

    // fs.readFile('data.txt', function (error, fileData) {
    //     console.log('File parsing done!');
    //     console.log(fileData.toString());
    // });
    try {
        fileData = await fs.readFile('data.txt')
    } catch (error) {
        console.log(error);
    }

    console.log('File parsing done!');
    console.log(fileData.toString());
    // return anotherAsyncOperation;
    console.log('Hi there!');


}

readFile();