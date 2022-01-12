const hobbies = ['Sports', 'Cooking']; // a pointer to the array is stored 
const age = 32; // the value itself is stored

hobbies.push('Reading'); // the address of the array doesn't change

console.log(hobbies);

// primitive values: numbers, strings, booleans & more (undefined)
// reference values: objects 

const person = { age: 32 };

function getAdultYears(p) {
    //p.age = p.age - 18;

    return p.age - 18;
}

console.log(getAdultYears({ ...person }));
console.log(person);