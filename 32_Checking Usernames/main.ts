let current_users = ["Ali", "Osama", "Bilal", "Sana", "Sarim"]

let new_users = ["Ayesha", "Asim", "Osama", "Salman","Sana"]

new_users.forEach(new_one_user => {
    let our_condetion = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLocaleLowerCase())
    if(our_condetion){
        console.log(`Sorry ${new_one_user} is already taken!`);
        
    }else {
        console.log(`This Username ${new_one_user} is available`);
        
    }
})