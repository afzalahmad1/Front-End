// Object Format

let obj = {
    fName: "Suman",
    lName: "Ghosh",
    age: 26,
    getFullName: function () { 
        return this.fName + " " + this.lName;
    }
}

// to access the function value from the JS object we would require
// the dot notation, but this cannot be understood by other 
//languages.So it's better to opt for json which is understood 
// by all the languages
console.log(obj.getFullName());

//JSON Format
// JSON can be in either object or string format
var json = {
    "data" : 
        {
            "first_name": "Sammy",
            "last_name": "Shark",
            "location": "Ocean",
            "pageTitle": {
                "pageData": {
                    "pageNum": 1,
                    "id": 1
                }
            },
            "func": function () { 
            return this.fName + " " + this.lName;
            }
        }
    
};
// Accessing data in json
console.log(json.data);
console.log(json.data['func']);

// Functions for working with JSON
// JSON.stringify converts objects to strings. It's used to send 
// the data from client to server in string format as strings 
// are lightweight.
let stringifiedJson = JSON.stringify(json);
console.log(typeof stringifiedJson);

// JSON.parse() converts the stringified json to object
let parsedJson = JSON.parse(stringifiedJson)
console.log(typeof parsedJson);