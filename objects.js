// const job = { title: 'Developer', location: 'New York', salary: 50000, }


// console.log(new Date().toISOString); 

class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }

    describe() {
        console.log(`I'm a ${this.title}, I work in ${this.location}, and I earn ${this.salary}.`);
    }
}

const developer = new Job('Developer', 'New York', 50000);
const cook = new Job('Cook', 'Munich', 35000);
console.log(developer);
console.log(cook);

developer.describe();
cook.describe();

// object destructuring 
const input = ['Albert', 'Einstein'];
const [first, last] = input;
console.log(first);
console.log(last);

const { title, location } = developer;
const { salary: jSalary } = developer;
console.log(title);
console.log(location);
console.log(jSalary);