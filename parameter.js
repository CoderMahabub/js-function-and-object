function bringSingara(taka) {
    console.log('Singara ere jonno dise', taka, 'Taka');
    console.log('Mama Singara Den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 250;
var singara = bringSingara(money);
console.log('Ai nen Singara', singara);