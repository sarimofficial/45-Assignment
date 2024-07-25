"use strict";
let Guest_list = ["Sarim", "Usman", "Ayesha", "Areeba"];
// for (let i = 0; i < Guest_list.length; i++) {
//     console.log('Dear Mr. ' + Guest_list[i] + ',/n/nit is our pleasure to invite you in our party./n/nThank You!/n/n');
// }
let adsent_Guest = 'Usman';
let new_Guest = 'Kamran tessori';
Guest_list[0] = new_Guest;
// for (let i = 0; i < Guest_list.length; i++) {
//     console.log('Dear Mr. ' + Guest_list[i] + ',/n/nit is our pleasure to invite you in our party./n/nThank You!/n/n');
// }
console.log(`Mr.${adsent_Guest} is not coming.`);
console.log('Good News! We Find Big Table So We are inviting 3 more guests.');
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Maryam Nawaz');
Guest_list.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',/n/nit is our pleasure to invite you in our party./n/nThank You!/n/n');
}
console.log('\nSorry We Can Arrange Big table only two Peoples Will Be Invited');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry MR . ${remove_Guest}, you are not invited for Dinner`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',/n/nYou are Still invied./n/nThank You!/n/n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
