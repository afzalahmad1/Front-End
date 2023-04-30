/*
    Write a function arrayToList that takes an array like [1,2,3] as input and
returns a nested object of the structure:{ value: 1, 
    rest: { value: 2, rest: {
value: 3, rest: null } }};
*/
/*
let arr = [1 , 2 , 3];
let obj ={};
for(let i=0;i<arr.length;i++){
    var value = arr[i];
    for(let j=i+1;j<arr.length;j++){
        let newObj ={

        }
    }
    
}
console.log(obj)
*/


/*Write a function to display the current time every ‘x’ seconds, ‘y’ number of times. After ‘y’ outputs,
 the function should terminate
 */
/*
 function getTimes(x,y){
    var count = 1;
    var a = setInterval(() => {
        console.log(new Date().getTime())
        count++;
        if(count==y+1){
            clearInterval(a);
        }
    }, x*1000);
 }
 getTimes(1,5);

 function getName(){
    var name = "Afzal"
    function displayName(){
        console.log(`Name is ${name}`)
    }
    return displayName;
 }   
 let a = getName();
 a()
*/
function displayTime(x, y) {
    let count = 0;
    let interval = setInterval(function() {
        let time = new Date().toLocaleTimeString();
        console.log(time);
        count++;
        if (count === y) {
            clearInterval(interval);
        }
    }, x * 1000);
}

// Call the function
displayTime(5, 10);

 /*
 Name => Chetan intern @TFT (F2 Mock)
 tasks:
   1: Write a function arrayToList that takes an array like [1,2,3] as input and
      returns a nested object of the structure:{ value: 1, 
      rest: { value: 2, rest: {
      value: 3, rest: null } }};

   2: function displayTime(x, y) {
       let count = 0;
       let interval = setInterval(function() {
           let time = new Date().toLocaleTimeString();
           console.log(time);
           count++;
           if (count === y) {
               clearInterval(interval);
           }
       }, x * 1000);
   }
   
   // Call the function
   displayTime(5, 10);

Theory:
1: what is closure and its implementation
2: sync and async programming
3: promises and its implementation
4: callback
5: web scrapping
 */