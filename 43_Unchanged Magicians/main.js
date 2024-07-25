function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Sarim", "Osama", "Asif"];
var copy_magicians_names = magician_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("Original Array\n");
show_magician(magician_names);
console.log("Copy Array\n");
show_magician(copy_great_magicians);
