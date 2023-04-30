// Callbacks: are the functions that are passed as an argument to other functions

function placeOrder(makePayment) {
    let isPaymentDone = makePayment()
    isPaymentDone ?
        console.log("order placed") :
        console.log("order can't be placed");
}

function makePayment() { 
    return false;
}

placeOrder(makePayment)


let store = {
    fruits: ["strawberry", "blueberry", "mango", "grapes"],
    toppings: ["choco chips", "sprinkles"],
    holders: ["cone", "cup", "stick"],
    liquid: ["milk", "ice"]
}

let bringItems = () => {
    
}

let cleaning = () => {

}

let order = (fruitName, holder, callProduction) => {
    setTimeout(() => {
        console.log(`${store.fruits[fruitName]} was selected`);
        callProduction(holder)
    }, 2000)
}

let production = (holder) => {
    setTimeout(() => {
        console.log("production has started");
        setTimeout(() => {
            console.log("the fruits have been chopped");
            setTimeout(() => { 
                console.log(`${store.liquid[0]} and ${store.liquid[1]} have been added`);
                setTimeout(() => { 
                    console.log("start the machine");
                    setTimeout(() => { 
                        console.log(`Ice cream has been placed on ${store.holders[holder]}`);
                        setTimeout(() => { 
                            console.log(`${store.toppings[1]} has been added`);
                            setTimeout(() => { 
                                console.log("serve ice cream");
                            }, 2000)
                        }, 3000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0)
}

order(0,2, production)