"use strict";
// Dinner Guests Working with one of the program from Exeries 14 though 18 print a message indicating the number of people you are inviitng to dinner
Object.defineProperty(exports, "__esModule", { value: true });
var guestlist = ["Abdullah Sheikh", "aheen Seikh", "Hina naseer"];
// print the name who ant make dinner
var unableattend = guestlist.slice(1, 1)[0];
console.log("".concat(unableattend, " not invited for dinner"));
//push
guestlist.push("Hina Naseer");
//print a message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited"));
});
