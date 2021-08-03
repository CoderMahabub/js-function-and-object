//variable
var skyColor = 'white';

//array
var phones = ['iphone', 'samsung', 'mi', 'motorwala', 'lg'];
phones[3] = 'walton';
//Check Oppo exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log('Opps! Amir khan oppo is missing');

}
// If lg is available ?
if (phones.indexOf('lg') != -1) {
    console.log('Lg is available');
}

//while Loop
var num = 0;
while (num <= 10) {
    num++;
}
for (var num1 = 0; num1 < 7; num1++) {
    num1++;
}

//Function
function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}
var n1 = 21;
var n2 = 32;
var n3 = 32;
var totalOfThreeNumbers = addThreeNumbers(n1, n2, n3);
console.log('Total Number is : ', totalOfThreeNumbers);


//Object
var microphone = {
    brand: 'M10',
    color: 'balck',
    position: 'head'
}
microphone.brand = 'M20';
var newColor = microphone.color;
microphone[newColor] = 'red';
console.log(microphone);