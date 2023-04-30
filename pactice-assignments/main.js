//complete this code
/*
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	getName(){
    return this.name;
  }
  setName(name){
    this.name=name;
  }

  getAge(){
    return this.age;
  }
  setAge(age){
    this.age=age;
  }
}

class Student extends Person{
  constructor(name, age) {
    super(name,age)
}
  study(){
    console.log(`${this.getName()} is studying`);
  }
}

class Teacher extends Person {
  constructor(name,age){
    super(name,age);
  }
  teach(){
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
/*
window.Person = new Person();
window.Student = Student;
window.Teacher = Teacher;
*/
/*
let person = new Person();
let student = new Student();
let teacher = new Teacher();
teacher.setName("sanjay")
teacher.setAge(36)
student.setName("Afzal")
student.setAge(23);
console.log(student);
teacher.teach();
console.log(teacher.getAge());
*/

/*
QQQQ=> Array of 5 promises print which one is resolve first

const promises = [];

for (let i = 0; i < 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  promises.push(new Promise((resolve, reject) => {
    // Insert your code here
    setTimeout(()=>{
      resolve(randomTime)
    },randomTime*1000)
  }));
}
Promise.any(promises).then(result => {
  document.getElementById("output").innerHTML = `The first promise resolved with ${result} seconds.`;
});
*/

/*
let random = Math.floor(Math.random()*10)+1;
console.log(random);

for (let i = 0; i < 5; i++) {
  console.log(new Date().getHours() ,":", new Date().getMinutes() ,":", new Date().getSeconds());
}
*/

//complete this code

/*
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log(`The ${this._species} makes a sound`)
	}
}

class Dog extends Animal {
	constructor(species){
		super(species)
	}
	bark(){
		console.log(`The ${this.species} barks.`)
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
	}
	purr(){
		console.log(`The ${this._species} purrs.`)
	}
}

let dog = new Dog('dog')
dog.bark()
let cat = new Cat('cat')
cat.purr()
*/
/*
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The " + this.species + " makes a sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}
let cat = new Cat("Felis catus");
console.log(cat.species); // Output: "Felis catus"
cat.makeSound(); // Output: "The Felis catus makes a sound"
cat.purr(); // Output: "purr"

let dog = new Dog("Canis lupus familiaris");
console.log(dog.species); // Output: "Canis lupus familiaris"
dog.makeSound(); // Output: "The Canis lupus familiaris makes a sound"
dog.bark(); // Output: "woof"
*/

/*
PROMLEM::
Create a class called Rectangle that has a constructor method that
 takes two arguments: width and height. It should have
  getters for width and height, and a method called 
  getArea() that calculates and returns the area of the
   rectangle. Create a subclass called Square that
    extends the Rectangle class. Add a method to the
     Square class called getPerimeter() that calculates 
     and returns the perimeter of the square.*/
/*
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}
let rectangle = new Rectangle(4, 5);
console.log(rectangle.width); // Output: 4
console.log(rectangle.height); // Output: 5
console.log(rectangle.getArea()); // Output: 20

let square = new Square(4);
console.log(square.width); // Output: 4
console.log(square.height); // Output: 4
console.log(square.getArea()); // Output: 16
console.log(square.getPerimeter()); // Output: 16
*/
/*
var ninja = {
  name: "Ninja",
  getName: function () {
    var name = this.name;
    return name;
  },
};
var funcName = function (snack, hobby) {
  console.log(this.getName() + " loves " + snack + " and " + hobby);
};
funcName.call(ninja, "sushi", "algorithms");
funcName.apply(ninja, ["sushi", "algorithms"]);
*/
//o/p:
/*Ninja loves sushi and algorithms
Ninja loves sushi and algorithms*/
/*
var Person = class {
  constructor() {}
  sayHello() {
    return "Hello!";
  }
};

var instance = new Person();
console.log(instance.sayHello() + " " + Person.name);
 o/p:
 Hello! Person
 */

  /*
function User(name){
  this.isAdmin = false;
}
var user = new User("James");
console.log(user);
*/
/*
var obj = {};

function A() { return obj; }
function B() { return obj; }
console.log(new A() == new B());

//true*/

 /*
class MyClass {
  constructor(x) {
  console. log("constructor is called!");
  this.x=x
  }
}
  
 const obj = new MyClass();
 console. log(obj.x);
  */

   /*
 function bike() {
  console.log(this.name) ;
 }
  
  var name = "Ninja";
  bike();
  */


  //extracting name from json
/*
  let student =[
    {"name": "John", "id": 123, "marks": 98},
    {"name": "Baba", "id": 101, "marks": 23},
    {"name": "yaga", "id": 200, "marks": 45},
    {"name": "Wick", "id": 115, "marks": 75}
  ]
  var newData = {"name": "Afzal", "id": 13, "marks": 89}
  student.push(newData)
  console.log(student);
var arr=[];
student.forEach((data)=>{ee
  arr.push(data.name)
})*/
/*
let name = student.filter((val)=>{
  console.log(val.id);
  return val.marks >50;
})*/
/*
const names = student.filter((obj) => obj.hasOwnProperty("name")).map((obj) => obj.name);
console.log(names); 
console.log(arr);
*/

/*
    function resultAll(arr) {
        let result = 0;
       for (let k = 0; k < arr.length; k++) {
         for (let m = 0; m < arr[ k ].length; m++) {
          if( arr[ k ][ m ] < 1 ) result += (arr[ k ][ m ]); 
         }
       }
         return result;
      }
      
      let res = resultAll ( [ [1, 2], [3, 4], [5, 6, 7] ] );
      console.log(res);
      */
     