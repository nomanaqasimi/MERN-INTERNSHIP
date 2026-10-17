const car = { 
    brand: "Tesla",
     model: "Model 3", 
     color: "white"
 };
 const mycar =() => {
const {brand, model} = car;
console.log(brand);
console.log(model);
 }
 mycar();