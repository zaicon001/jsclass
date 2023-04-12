//In an orgabisation , bonus to be shared for staff who have 
//spent at least 10years with the compnay to get 5% on their salary
//Write a functuion to clalculate if a staff is entiled to the bonus 
//and how much
//BEDMAS

function getBonus(howlongInYear, monthlySalary){
    
    if(howlongInYear >= 10){
        let awoofCash = ( (5 / 100) * monthlySalary) 
        let newSalary = awoofCash + monthlySalary
        
        // "Thank you for your long service .We started paying you " + monthlySalary + "But today " +
        // "we are happy of how long you have served this organisation. Your new salary is: "+ newSalary
        
        return `Thank you for your long service . You new salary is: ${newSalary}`
    }else{
        
        const NO_OF_YEAR_AWOOF_INCLUSION = 10
        
        let noOfYearLeft =  NO_OF_YEAR_AWOOF_INCLUSION - howlongInYear
         
         return ` You are blessed, your time is on the way.You have ${noOfYearLeft}years left to spend to enjoy this 
         bonus.But today your salary remains this:  ${monthlySalary}`
    }
}


console.log(getBonus(6, 25000))

console.log(getBonus(13, 150000))



