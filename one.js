const car={
    make:"Toyoto",
    model:"camry",
    year:2022
};

function displayCarProperties(car){
    for(const property in car){
        console.log(`${property}:${car[property]}`);
    }
}
displayCarProperties(car);
