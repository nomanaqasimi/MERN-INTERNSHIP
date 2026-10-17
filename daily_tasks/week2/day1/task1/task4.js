var user = {Name: "Aman", age: 22};
const{Name, age} = user;
const greet =() => {
    console.log(`Hello ${Name}, you are ${age} years old`);
}
greet();
