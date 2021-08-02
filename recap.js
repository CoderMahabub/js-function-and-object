var favoriteBook = '4 hour work week';
var bookList = ['bangla', 'english', 'mathematics', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[3] = 'Story Book';
console.log(bookList);
bookList.push('new Added');
console.log(bookList);
bookList.pop();
console.log(bookList);

//Conditional
if (bookList.length == 4) {
    console.log('There are 4 books here');
}
else if (bookList[1] == 'english') {
    console.log('I am english');
}
else {
    console.log('I dont know');
}

//while Loop
var i = 0;
while (i < 7) {
    console.log(i);
    console.log('Looping looping');
    i++;
}

//For Loop
for (i = 0; i < 10; i++) {
    console.log(bookList);
    i++;
}