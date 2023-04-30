// Prototype 

// whenever you create any object, JS automatically pushes these hidden
// properties into an object and then JS engine attaches this object
// to our custom object

// If you want to access that object which JS created , we use
// .__proto__ property
let user = {
    fName : "Suman"
}

let a = 10;

let cust = ["sam", "ram", "bam"]

// __proto__ is used with custom objects
var house = {
   color: "brown",
   size: "1bhk"
}

// prototype is present on constructor objects
function Student(name, age) {
   this.name = name,
   this.age = age,
       
       this.welcome = function () {
           console.log("hello" + this.name);
       }
}

const student = new Student("John", 22);


let fullName = "Suman";


// Prototype is an object from which another object is derived from
// they are the means of inheritance in JS.

// USES:
// 1. to add new methods to prototype property
// 2. prototypal inheritance
String.prototype.myMap = function () {
   console.log("this is my map");
}

function User(name, age) {
   this.name = name;
   this.age = age; 
}

User.prototype.getDetails = function () { 
       console.log(this.name);
}

// Never add primitive datatypes in prototype, add them in constructor
User.prototype.city = "Jaipur";

let user1 = new User("suman", 22);
let user2 = new User("raman", 22);

user1.getDetails()
user2.getDetails()