const simulateFetch = new Promise((resolve, reject) => {
let isOnline = true;
setTimeout(() => {
if (isOnline) resolve("Data fetched successfully ");
else reject("Network error ");
}, 1500);
});

simulateFetch
.then(msg => console.log(msg))
.catch(err => console.error(err));