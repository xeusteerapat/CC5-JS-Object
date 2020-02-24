let person = {};

person["firstname"] = "Teerapat";
person["lastname"] = "Prommarak";
person["age"] = 33;
person["height"] = 173;

person.greeting = function() {
  console.log(`Hello, my name is ${this.firstname} ${this.lastname}. I'm ${this.age} years old.
    `);
};

person.greeting();
console.log(person);
