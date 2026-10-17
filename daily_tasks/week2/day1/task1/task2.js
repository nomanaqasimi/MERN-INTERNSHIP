const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "mango"];
const AllFruits = [...fruits, ...moreFruits];
const printFruits = (...fruitlist) => {
    fruitlist.forEach(fruit => {
        console.log(fruit);
    });
};
printFruits(...AllFruits);