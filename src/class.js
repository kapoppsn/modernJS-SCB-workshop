class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getDetail() {
    return `My name is ${this.name} I'm ${this.age} year old.`;
  }
  getEmail() {
    return this.email;
  }
}

const jane = new Person("Jane", 35, "jane@gmail.com");
console.log(jane.getDetail());

const noon = new Person("Noon", 23, "noon@gmail.com");
console.log(noon.getEmail);

class Employee extends Person {
  constructor(name, age, email, job, salary) {
    super(name, age, email);
    this.job = job;
    this.salary = salary;
  }

  getJobAndSalary() {
    return `${this.name} is ${this.job} has salary ${this.salary} Baht.`;
  }
}

const bow = new Employee("Bow", 30, "bow@gmail.com", "chef", 30000);
console.log(bow.getDetail());
console.log(bow.getJobAndSalary());
