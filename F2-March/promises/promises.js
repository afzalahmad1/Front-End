let store = {
    fruits: ["strawberry", "blueberry", "mango", "grapes"],
    toppings: ["choco chips", "sprinkles"],
    holders: ["cone", "cup", "stick"],
    liquid: ["milk", "ice"]
}

let is_shop_open = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => { 
        if (is_shop_open) {
            setTimeout(() => { 
                resolve(work())
            }, time)
        } else {
            reject(console.log("Our shop is closed"))
        }
    })
}

// step 1
order(2000, () => console.log(`${store.fruits[0]} was selected`))
    // step 2
    .then(() => {
        return order(0, () => console.log("production has started"))
    })

    .then(() => {
        return order(2000, () => console.log("fruits have been chopped"))
    })

    .then(() => {
        return order(1000, () => console.log("added water and ice"))
    })

    .then(() => {
        return order(1000, () => console.log("started the machine"))
    })
    .then(() => {
        return order(2000, () => console.log(`Ice cream has been placed on ${store.holders[0]}`))
    })
    .then(() => {
        return order(3000, () => console.log(`${store.toppings[0]} have been added`))
    })
    .then(() => {
        return order(2000, () => console.log("serve the ice cream"))
    })
    .catch(() => { 
        console.log("customer left as shop was closed");
    })
    .finally(() => {
        console.log("end of the day!");
    })
