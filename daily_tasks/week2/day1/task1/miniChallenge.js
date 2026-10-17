var numbers = [1, 2, 3];
const product =(...nums) => {
 nums.forEach(num => {
     console.log(num * 2);
 });
}
product(...numbers);