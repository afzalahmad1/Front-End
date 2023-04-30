let store = {
    fruits: ["strawberry", "blueberry", "mango", "grapes"],
    toppings: ["choco chips", "sprinkles"],
    holders: ["cone", "cup", "stick"],
    liquid: ["milk", "ice"]
}

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => { 
        if (is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("Our shop is closed"))
        }
    })
}

async function cleaning() {
    try {
        await time(2000)
        console.log("[CLEANING] getting utensils from kitchen");

        await time(3000)
        console.log("[CLEANING] keeping utensils in warm water");

        await time(2000)
        console.log("[CLEANING] washed the utensils");

        await time(5000)
        console.log("[CLEANING] arranging the utensils");
    } catch (err) { 
        console.log("[CLEANING] utensils not washed");
    }
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${store.fruits[0]} was selected`)   

        await time(0)
        console.log("production has started")

        await time(2000)
        console.log("fruits have been chopped")

        await time(2000)
        console.log("serve the ice cream");
    } catch (err) {
        console.log("customer left");
    } finally {
        console.log("day ended");
    }
}

cleaning()
kitchen()