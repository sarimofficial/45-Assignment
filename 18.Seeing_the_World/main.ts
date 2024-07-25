import { log } from "console";

let placetovisit: string[] = [ "paris", "newyork", "rome", "italy", "china"]

//print in original order
console.log("original Order:", placetovisit);

// Print array in alphabetical oeder without modifing the actual list

console.log("/n Alphabetical Order:", placetovisit.slice().sort());

//array is still in its original order by printing it.
console.log("original Order:", placetovisit);

// print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse Order", placetovisit.slice().sort().reverse());

//arrary is still in is original order by printting it again.
console.log("original Order:", placetovisit);

// Reverse the order of your list print the array to show that its order has changed.
console.log("reversr oder changed");
placetovisit.reverse();
console.log(placetovisit);

// Reverse order of your list again. print the list to show its back to its original order.
console.log("original order:" ,placetovisit.sort());
console.log(placetovisit);

// Sort ypur array so its stored in alphabetical order. Print the array to show that its order has bee changed.


//sort to change your array so its stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse alphabetical order changed:", placetovisit.sort().reverse()); 

console.log(placetovisit);




