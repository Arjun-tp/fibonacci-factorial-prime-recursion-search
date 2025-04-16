const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
];
console.log(items)


// FILTER
let filteredItems = items.filter((items) => {
    return items.price < 50
})
console.log(filteredItems)


// MAP
let mappedItems = items.map((items) => {
    return items.price < 50
})
console.log(mappedItems)


// FIND
let findItem = items.find((items) => {
    return items.price == 5
})
console.log(findItem)


// SOME - OR gate
let someItems = items.some((items) => {
    return items.price == 5
})
console.log(someItems)


// EVERY - AND gate
let everyItems = items.every((items) => {
    return items.price == 5
})
console.log(everyItems)


// REDUCE - do an opeation - here finding sum of all the numbers
let reduceItems = items.reduce((currentTotal, items) => {
    return items.price + currentTotal
}, 0)
console.log(reduceItems)
