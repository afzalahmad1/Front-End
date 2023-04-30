// 'this' has different values depending on where it is used:

// DEFAULT BINDING
// by default '`this` keyword refers to window object
// when used inside a standalone function, `this` keyword refers to the window object. 
// This rule doesn't hold incase of use strict. `this` is undefined here
// when a function is present inside another function/method,
// in that case also `this` keyword refers to the window object(to solve this prob we ude arrow function)
// console.log(this);

function add() {
    console.log(this);
}

// function add() {
//     'use strict';
//     console.log(this);
// }
add();

// IMPLICIT BINDING
// A function can use an object as it's context only if the object is
// bound to it at the call site. This form of binding is called
// implicit binding.

var age = 23;
function getAge() { 
    console.log(this);
    console.log(this.age);
}

getAge()
// this ==> window
// window.age =====> undefined

let obj = {
    age: 22,
    func: getAge,
    nestedObj: {
        age: 26,
        func: getAge
    }
}

obj.func();
// this ==> obj 
// this.age === obj.age;

obj.nestedObj.func()
// this ===> nestedObj
// this.age === nestedObj.age

var bunny = {
    name: 'Buggsss',
    tasks: ['eats carrots', 'sleeps'],
    showName: function () {
        console.log(this);
        this.tasks.forEach(function (task) {  //here this refers to window object and this.name print nothing 
            console.log(this);                // this is a problem 
            console.log(this.name + "does this task: " + task );
        })
    }
}

bunny.showName()

// ways to solve the `this` keyword problem in ES5

// var bunny = {
//     name: 'Buggsss',
//     tasks: ['eats carrots', 'sleeps'],
//     showName: function () {
//         console.log(this);
//         var that = this;
//         this.tasks.forEach(function (task) { 
//             console.log(that);
//             console.log(that.name + "does this task: " + task );
//         })
//     }
// }

// bunny.showName()

// using arrow functions: 
// in case of arrow functions, `this` is based on the enclosing lexical scope

// var bunny = {
//     name: 'Buggsss',
//     tasks: ['eats carrots', 'sleeps'],
//     showName: function () {
//         this.tasks.forEach((task) => { 
//             console.log(this.name + "does this task: " + task );
//         })
//     }
// }

// bunny.showName()




// EXPLICIT BINDING

function getFullName(city, state) {
        console.log(`${this.fName} ${this.sName} stays in ${city},${state} `);
}
    
const employee = {
    fName: "John",
    sName: "Wick",
    getFullName: getFullName
}

const customer = {
    fName: "Suman",
    sName: "Ghosh"
}


// obj_which_has_the_method.method_name.call(new_obj_you_want_this_to_refer)
// call is function that helps you replace the value of `this` inside a function
// with whatever value you want
employee.getFullName('koramangla', 'bangalore'); // this ==> employee
getFullName.call(customer, "gurgaon", "haryana") // this ===> customer
employee.getFullName.apply(customer, ["gurgaon", "haryana"]) // this ===> customer

const getEmpDetail = employee.getFullName;
getEmpDetail()

// Problem with call, apply: they execute as soon as you call them
// Bind: is function which creates another function that you can
// execute later with the new context of `this` 

document.getElementById("btn").addEventListener("click", getFullName.bind(customer, "gurgaon", "haryana"))

document.getElementById("btn-1").addEventListener("click", getFullName.bind(customer, "gurgaon", "haryana"))