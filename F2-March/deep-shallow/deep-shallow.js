// primitive datatypes are immutable
let originalVal = 10;
let copiedVal = originalVal;
console.log(originalVal, copiedVal);

copiedVal = 20;
console.log(originalVal, copiedVal);

// non-primitive datatypes are mutable
let orgVal = {
    fName: "john",
    age : 30
}

let copyVal = orgVal;
console.log(orgVal, copyVal);
copyVal.fName = "Suman";
console.log(orgVal, copyVal);public static int greatestOfThree(int a, int b, int c) {
    int greatest = a;
    if (b > greatest) {
        greatest = b;
    }
    if (c > greatest) {
        greatest = c;
    }
    return greatest;
}

// creating deep copy of non-primitive data types
// 1. JSON.stringify()
// this doesn't work when a function present inside the object
let orgValue = {
    fName: "Suman",
    lName: "Ghosh",
    getFullName: function () { 
        return this.fName + " " + this.lName;
    },
    address: {
        city: "faridabad",
        state: "haryana"
    }
}

// let copiedValue = JSON.parse(JSON.stringify(orgValue))
// let copiedValue = Object.assign({}, orgValue)
let copiedValue = { ...orgValue };

console.log(orgValue);
console.log(copiedValue);

copiedValue = {
    ...copiedValue,
    fName: "Alisha",
    address: {
        ...copiedValue.address,
        city: "Panipat"
    }
}

// copiedValue.fName = "Ram";
// copiedValue.address.city = "Gurgaon"
console.log(orgValue);
console.log(copiedValue);


// Object.assign(target, source)
// This doesn't work when you have nested objects


// Spread operator
// it is used to copy the existing items of an array or object into another array or object
let obj = {
    age: 26,
    fName: "Ram",
    address: {
        city: "goa"
    }
}

let obj3 = {
    dob: "26 may 2022",
}

let obj2 = {
    ...obj, ...obj3, age: 28, address: {
        ...obj.address,
        city: "pondicherry"
} }
console.log(obj2);


