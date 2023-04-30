/*
let stringData = "This is my  book";
let splitData = stringData.split(" "); // split string to array as " "
console.log({ splitData });

let orgString = splitData.join(" "); //take th index add to string with space and then 1st index add to string with space
console.log(orgString);
*/

let arr = [1 , 2 , 3];
let arr2 = [7 , 8 ,9]
arr.push(4)
arr.push(5)
arr.unshift(0)
arr.pop()
arr.unshift(0)
arr.shift()
//console.log(arr.entries());
arr.push(9)
console.log(arr);
//console.log(arr.slice(0,-2));
//console.log(arr.concat(arr2))
//console.log(arr.constructor);  //return array prototype
//console.log(arr.entries());

let filteredArr = arr.filter((a)=>{
    return a%2!==0
})
console.log(filteredArr)

let findElement = arr.find((a)=>{
    return a>=2
})
console.log(findElement);

let findIndex = arr.findIndex((a)=>{
    return a==9
})
console.log(findIndex);
