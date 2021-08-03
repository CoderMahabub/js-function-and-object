// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         continue;
//     }
//     i++;
// }

// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i >= 8) {
//         break;
//     }
// }

var numbers = [54, 55, 43, 90, 101, 424, 43, 88];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 100) {
//         break;
//     }
// }

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}