var current_users = ["Ali", "Osama", "Bilal", "Sana", "Sarim"];
var new_users = ["Ayesha", "Asim", "Osama", "Salman", "Sana"];
new_users.forEach(function (new_one_user) {
    var our_condetion = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLocaleLowerCase(); });
    if (our_condetion) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
