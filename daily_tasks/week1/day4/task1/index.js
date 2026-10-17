function area(l,h){
    return l * h;
}
RectArea = area(5, 10);
console.log(RectArea);
const eligiblity =(age)=>{
    if(age >= 18){
        return "Eligible to vote";
    }else{
        return "Not eligible to vote";
    }
}
result = eligiblity(20);
console.log(result);