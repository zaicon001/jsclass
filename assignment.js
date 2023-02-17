// JS CLASS ASSIGNMENT
// THEFORTUNE TELLER
function tellFortune (jobTitle, location, partnersName, numberOfKids){

    let result = "You will be an " + jobTitle + " in " + location + ",and married to " + partnersName + " with " + numberOfKids + " kids."
    return result
     
  }
  console.log (tellFortune("engineer", "Lagos", "wunmi", 5))
  console.log (tellFortune("banker", "Abuja", "jide", 2))
  console.log (tellFortune("lawyer", "London", "chika", 3))
  
  
  // THE PUPPY AGE CALCULATOR
  function calculateDogAge (puppyAge){
    let dogYear = 7 * puppyAge
    let result = "Your doggie is " + dogYear + " years old in dog years!"
    return result 
  
  }
  console.log (calculateDogAge (2))
  console.log (calculateDogAge (5))
  console.log (calculateDogAge (6))
  
  // LIFETIME SUPPY CALCULATOR
  function calculateSupply (age, amountPerDay){
    let lifeTimeSupply = 365 * age * amountPerDay
    return result = "You will need " + lifeTimeSupply + " of pringles to last you until the ripe old age of " + age 
  }
  console.log(calculateSupply(65, 2))
  console.log(calculateSupply(50, 3))
  console.log(calculateSupply(20, 4))
  
  // The GEOMETRIZER
  function calcCircumfrence (radius){
    let circumference = 2 *  3.14159 * radius
    return result = "The circumference is " + circumference
  }
  
  function calcArea (radius){
    let area = 3.14159 * radius * radius
    return result = "The area is " + area
  }
  
  console.log (calcCircumfrence(3))
  console.log (calcArea(3))
  
  //The TEMPERATURE CONVERTER
  function celsiusToFahrenheit (celsius){
    let fahrenheit = (celsius * 1.8) + 32
    return result = celsius + "°C is " + fahrenheit + "°F"
  }
  
  function fahrenheitToCelsius (fahrenheit){
    let celsius = (fahrenheit - 32) *1.8
    return result = fahrenheit + "°F is " + celsius + "°C"
  }
  console.log (celsiusToFahrenheit(50))
  console.log (fahrenheitToCelsius(50))
  console.log (fahrenheitToCelsius(40))