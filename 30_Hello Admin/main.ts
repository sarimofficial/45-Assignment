let userNames =["Sarim", "Ayesha", "Admin", "Syeda", "Asim"]

userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
        
    }else {
        console.log(`hello ${oneUser}, thank you for logging in again`);
        
    };
});