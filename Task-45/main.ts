/*
Cars: Write a funcƟon that stores informaƟon about a car in an Object.
The funcƟon should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the funcƟon
with the required informaƟon and two other name-value pairs, such as a
color or an opƟonal feature.
Print the Object that’s returned to make sure all the informaƟon was
stored correctly.
*/


//Define a function to create objects related to a car having different options ...

function create_car(manufacturer, model, ...options){
    //Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    //Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()]= value.trim(); 
    })

    return car;
} 

//Call the fucntion to create objects for the car
let my_car = create_car("Toyota", "Corolla", "color : Black", "Sunroof : True", "Year : 2024");

//Print the variable to check all the info is stored correctly in the car object
console.log(my_car);