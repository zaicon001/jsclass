///write a function to tell if a number is divisible by 2. it takes 
//1 paremeter and return true if the number is divisible by 2 and false
// if not divisible

function isDivisibleBy2(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }

}


console.log(isDivisibleBy2(5))
console.log(isDivisibleBy2(52))
console.log(isDivisibleBy2(100005))
console.log(isDivisibleBy2(2))