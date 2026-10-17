function fakeAPICall() {
console.log("Fetching user details...");
setTimeout(() => {
        console.log("processing data...");
setTimeout(() => {  
console.log("User data received ");
}, 2000);
} , 1000);
}
fakeAPICall();