var computer = {
    price: 29000,
    storage: '156gb',
    processor: 'Intel i5',
    color: 'silver'
};

// console.log(computer);
// console.log(computer.color);
var computerProcessor = computer.processor;
console.log('Processor Of My Pc: ', computerProcessor);

//Set a object property Value
var computerPrice = computer.price = 22000;
console.log('New Price of My COmputer: ', computerPrice);

//Different ways to set a value of an object Property
var priceProperty = ["price"];

computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 19000;


var storageProperty = 'storage';
computer[storageProperty] = '500gb';
computer.storage = '1tb';
computer['storage'] = '5tb';
console.log(computer);