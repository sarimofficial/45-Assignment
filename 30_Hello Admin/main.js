var userNames = ["Sarim", "Ayesha", "Admin", "Syeda", "Asim"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again"));
    }
    ;
});
