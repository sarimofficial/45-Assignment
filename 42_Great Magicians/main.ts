function show_magician(magician: string[]){
    magician.forEach(name => console.log(name)
    );
}

function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`)
}

let magician_names = ["Ali", "Osama", "Asif"]

let great_magicians = make_great(magician_names)
show_magician(great_magicians)