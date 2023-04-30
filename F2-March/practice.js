/*
function a(a,b,c){
    console.log(a+b*c);
}
a(2,3);*/
/*
var words = ['one', 'two', 'three','four'];
words.forEach(function(word){
    console.log(word);
    if(word==='two'){
        words.shift;
    }
});*/
/*
var combinedString="";
function a(){
    combinedString = "inside a";
    function b(){
        combinedString = combinedString + " inside b";
    }
    b();
}
a();
console.log(combinedString);*/
/*
var rectArea = function(width,height){
    return width * height;
}
console.log(rectArea(5,4));*/
/*
function sqSum(a,b){
    function square(x){
        return x*x;
    }
    return square(a) + square(b);
}*/

/*
var a=10;
function test(){
    var a=20;
}
test();
console.log(a);


var a=10;
function test(){
     a=20;
}
test();
console.log(a);*/
/*
hoisted();
var hoisted = function(){
    console.log('bar');
};*/

/*
var a=1;
function b(){
    a=10;
    return;
    function a(){}
}
b();
console.log(a);*/

/*
array = [ 60, 70, 20, 10, 40, 90 ];

const test = function(x) {
    return x > 5;
}

if(!array.every(test)) {
    console.log("statement 1"); 
}

else {
    console.log("statement 2"); 
}*/
/*
function test(a,b){
    console.log(a+b);
}
test(2,3,4);*/
/*
function a(){
    console.log("inside a");
    function b(){
        console.log("inside b");
    }
}
a()b();*/
/*
var add = function(a,b){
    return a+b;
}

var subtract = function(a,b){
    return a-b;
}
var op = function(func){
    var x=2;
    var y=3;
    return func(x,y);
}

console.log(op(add));
console.log(op(subtract));*/

/*
x = 5; 
console.log(x); 
var x;*/

/*
x((a,b,c)=>{
    return a+b+c;
},2,3,6)

function x(callback,a,b,c){
    let str = ""
    setTimeout(()=>{
        str += "x"
    });

    str += callback(a,b,c)
    console.log(str);      // 11
}*/
/*
var a=10;
setTimeout(()=>{
    console.log(a);  //20
},1000)

var a=20;*/
/*
for(var a = 1 ; a<5 ; a++){
    setTimeout(()=>{
        console.log(a);
    },1000)
}  */// 5 5 5 5 5
/*
const promise = new Promise((resolve,reject)=>{
    resolve('a')
})

setTimeout(()=>{
    console.log('b');
})

promise.then((msg)=>{
    console.log(msg);   
})
//a b
*/

/*
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('a');
    })
})
 const promise2 = new Promise((resolve,reject)=>{
    resolve('b')
 })

 const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('c');
    },10)
 })

 Promise.all([promise1,promise2,promise3]).then((msg)=>{
    console.log(msg);
 })
//[a,b,c]
*/


/*
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('a')
    })
})

const promise2 = new Promise((resolve,reject)=>{
    resolve('b')
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('a')
    },10)
})


Promise.race([promise1,promise2,promise3]).then((msg)=>{
    console.log(msg);
})
// b
*/

/*
var abc = setInterval(counting,300);
var count = 0;

function counting(){
    console.log(count++);
    if(count == 5){
        clearInterval(abc);
    }
}   // 0 1 2 3 4
*/

/*
let People = function(person,age){
    this.person = person;
    this.age = age;
    this.info=function(){
        console.log(this);
        setTimeout(()=>{
            console.log(this.person + " is " + this.age + " year old ");
        },3000)
    }
}

let person1 = new People('john',21)
person1.info();
*/
/*
function sqSum(a,b){
    function square(x){
        return x*x;
    }
    return square(a) + square(b);
}

console.log(sqSum(2,3)); */

/*
var Sequence = (function sequnceIIFE(){
    var current = 0;
    return {
        getCurrentValue: function(){
            return current
        },
        getNextVulue: function(){
            current = current +1;
            return current;
        }
    }
}());
console.log(Sequence.getNextVulue());
console.log(Sequence.getNextVulue());
console.log(Sequence.getCurrentValue());

// 1 1 2
*/


/*
function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    }
}
let counter1 = makeCounter();
let counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
// 0 1 0
*/
/*
var a = 10
console.log(a);
var a = 20
console.log(a);
*/
/*
var a=10;
function foo(){
    var a = 20;
    console.log(a);
 //   console.log(window.a);
}
console.log(a);
foo();
*/