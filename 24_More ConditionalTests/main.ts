//• Tests for equality and inequality with strings
const string1: string = "sarim"
const string2: string = "world"

console.log(string1 === string2);  //false
console.log(string1 !== string2);  //ture

//tests using the lower case function
const uppercase : string = "sarim";
const lowercase : string = "world";

console.log(uppercase.toLowerCase() === lowercase); // ture


//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const number1 : number = 10;
const number2 : number = 20;

console.log(number1 === number2);  //false
console.log(number1!== number2);  //ture
console.log(number1 > number2);    //false

console.log(number1 < number2); //ture
console.log(number1 >= number2); //false
console.log(number1 <= number2); //ture


//test using "and" and "or" operator
const x: number = 10;
const y: number = 20;
const z: number = 30;

console.log( x< y  && y < z) ; //ture
console.log( x > y || y < z ); //ture

//test whether an item is in a array

const array1: number[] = [1,2,3,4,5,6];
const itemtofind : number = 3;

console.log(array1.indexOf(itemtofind) !== -1 ); //ture

//test whather an item is not in a array

console.log( array1.indexOf(10) === -1 ); //ture
















