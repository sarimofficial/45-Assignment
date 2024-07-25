"use strict";
function create_car(manufacturer, model, ...options) {
    let car = {
        model: model
    };
}
Options.forEach(Option => {
    let [key, value] = Option.split(":");
    car[key.trim()] = value.trim();
});
return Car;
my_car = create_car("Toyota", "Corolla", "Color:Black", "Sunroof:ture");
