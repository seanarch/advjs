function greetUser(greetingPrefix, userName = 'user') {
    // console.log(greetingPrefix + ' ' + userName + '!');
    console.log(`${greetingPrefix} ${userName}`);
}

greetUser('Hi', 'Max');
greetUser('Hello');
greetUser('Hello', 'John');


function sumUp(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

console.log(sumUp(1, 5, 10, 11, 20, 31));

const inputNumbers = [1, 5, 10, 11, 20, 31];
console.log(sumUp(...inputNumbers));
