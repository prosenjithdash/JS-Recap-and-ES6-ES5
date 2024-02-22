/*

ES6: Ecma Script Verson 6

var: no any reason for use var
let: allow it to reassign
const: do not allow it to reassign but use push and add elements or values


*/
// var
var n1 = 50;
console.log(n1);

// let
let money = 60;
// allow
money = 40;
console.log(money);

// const
const rich = 333;
// not allow
// rich = 70;
console.log(rich);

// But Modified possible for const
const array = [49, 399, 39, 2, 3, 4];
console.log(array)

array[5] = 100;
console.log(array)

array.push(200, 300, 400, 500)
console.log(array)