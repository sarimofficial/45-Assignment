// let student = {
//     name: "sarim",
//     rollnumber: 24,
//     grades: [85, 90,75]
// };

// console.log(student.name);

// let products = {
//     name: "laptop",
//     price: "8000",
//     description: "high performance laptop with fast processor"
// }

// console.log(products.price);

// // type interface

// interface person {
//     name: string;
//     age: number;
//    // city: string
// }

// let person1: person ={
//     name: "faraz",
//     age: 30,
//     //city: "london"

// }

// let person2 : person = {
//     name: "john1",
//     age: 34,
//     //city: "karachi"
// }

// console.log(person2.name);

// //type annotation
// let myVarible: string = "hello";

// //type inters
// let anotherVarible = 'world'
// let person = {
//     name: "john",
//     age: 30,
//     city: "london"
// }

// //ubdated property

// person.age = 35;
// person.city = "karachi"

// //delete person.name;

// console.log(person);

// //add new property

// //add new property
// person["gender"] = "male";

// console.log(person);

// //define custom type property

// // any perperty

// let myvariable: any;

// myvariable =10;
// myvariable ="hello";
// myvariable = true;

let objectcontainingitems: {[key: string]: any} ={
    "laptop": {
        name: "laptop",
        price: "8000",
        description: "high performance laptop with fast processor"

    },
    "mouse": {
        price: "10000",
        description: "best performance"

    },
    "keyboard": {
        name: "keyboard",
        price: "5000",
        description: "good performance"
    },
}
console.log(objectcontainingitems);
