// const job = { title: 'Developer', location: 'New York', salary: 50000, }


// console.log(new Date().toISOString); 

class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }
}

const developer = new Job('Developer', 'New York', 50000);
const cook = new Job('Cook', 'Munich', 35000);
console.log(developer);
console.log(cook);
