function create_car(manufacturer : string, model:number, ...options:string[]){
let car = {
    manufacturer:manufacturer,
    model:model,
}

}
create_car.forEach(Option => {
    let [key,value] = Option.split(":")
     [key.trim()] = value.trim()
    return create_car
})


my_car = create_car("Toyota", 24344, "Color:Black", "Sunroof:ture")
