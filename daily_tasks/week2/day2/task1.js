const prices = [120, 250, 300, 450, 600];
console.log("original price");
console.log(prices);
const filteredprizes = prices.filter( price => price > 250);
console.log("price > 250");
console.log(filteredprizes);
const discountedprice = filteredprizes.map(price =>(price-(price*0.1)));
console.log("discounted price");
console.log(discountedprice);