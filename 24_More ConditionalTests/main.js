//• Tests for equality and inequality with strings
var string1 = "sarim";
var string2 = "world";
console.log(string1 === string2); //false
console.log(string1 !== string2); //ture
//tests using the lower case function
var uppercase = "sarim";
var lowercase = "world";
console.log(uppercase.toLowerCase() === lowercase); // ture
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number1 = 10;
var number2 = 20;
console.log(number1 === number2); //false
console.log(number1 !== number2); //ture
console.log(number1 > number2); //false
console.log(number1 < number2); //ture
console.log(number1 >= number2); //false
console.log(number1 <= number2); //ture
//test using "and" and "or" operator
var x = 10;
var y = 20;
var z = 30;
console.log(x < y && y < z); //ture
console.log(x > y || y < z); //ture
//test whether an item is in a array
var array1 = [1, 2, 3, 4, 5, 6];
var itemtofind = 3;
console.log(array1.indexOf(itemtofind) !== -1); //ture
//test whather an item is not in a array
console.log(array1.indexOf(10) === -1); //ture
