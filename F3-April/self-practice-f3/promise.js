// Greet() 'THEN' takeOrder() 'THEN' giveFood() 'THEN' takePayment() 'THEN' Thankyou()

function greet(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Welcome")
        }, 0);
    })
}

function takeOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("order something")
        }, 1000);
    })
}

function giveFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Food is served")
        }, 3000);
    })    
}
function takePayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("payment done")
        })
    },3000)
}
function thankyou(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("Thank You! Come again")
        }, 3000);
    })
}
/*
greet().then((data)=>{
    console.log(data)
    return takeOrder();
}).then((data)=>{
    console.log(data);
    return giveFood();
}).then((data)=>{
    console.log(data);
    return takePayment();
}).then((data)=>{
    console.log(data);
    return thankyou();
}).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})
*/

async function asyncFunction(){
    console.log("function started....");
    try {
        console.log("Inside try.....");
        let data1 = await greet();
        console.log(data1);
        let data2 = await takeOrder();
        console.log(data2);
        let data3 = await giveFood();
        console.log(data3);
        let data4 = await takePayment();
        console.log(data4);
        let data5 = await thankyou();
        console.log(data5);
    } catch (error) {
        console.log(error)
    }
}
asyncFunction()
let a = prompt("enter  food..")
if(a){
    console.log(`${a} is entered ....`);
}else{
    console.log("cancelled.....");
}
