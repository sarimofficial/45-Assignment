function show_magician(magician: string[]){
    magician.forEach(name => console.log(name)
    );
}

function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`)
}

let magician_names = ["Sarim", "Osama", "Asif"]
let copy_magicians_names = magician_names.slice()

let copy_great_magicians = make_great(copy_magicians_names)

console.log("Original Array\n");
show_magician(magician_names)
console.log("Copy Array\n");
show_magician(copy_great_magicians)



