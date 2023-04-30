// class based constructor

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    welcome() {
        console.log(this.name);
    }
}

let person = new Person("suman", 23);
person.welcome()

// constructor function
// arrow functions cannot be used to create constructor functions
function Student(name, age) {
    this.name = name,
    this.age = age,
        
        this.welcome = function () {
            console.log("hello" + this.name);
        }
}

// creates an object
// to create an object from a constructor function we require new keyword
const student = new Student("John", 22);
const student2 = new Student("Sara", 23);
student.welcome()
student2.welcome()

// Create Objects: constructor func VS Object literal
//1. 
// using object literal: used to create single object
let customer = {
   name: "Sam"
}

// using constructor func: you can create multiple objects
function Customer(name) {
    this.name = name
}

let customer2 = new Customer("Sam");
let customer3 = new Customer("Ram");

//2. 
// objects created using constructor are unique.in case you want to add / modify
// a property to one particular object, they can accessed from that particular obj only.
customer2.city = "San Francisco";
console.log(customer2);
console.log(customer3);


let client = {
   name : "Sam"
}

console.log(client.name);

let client2 = client;
client2.name = "sammy";
console.log(client.name);
