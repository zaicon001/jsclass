// THEFORTUNE TELLER
function tellFortune (x, y, z, n){

    let result = "You will be an " + x + " in " + y + ",and married to " + z + " with " + n + " kids."
    return result
    
  }
  console.log (tellFortune("engineer", "Lagos", "wunmi", 5))
  console.log (tellFortune("banker", "Abuja", "jide", 2))
  console.log (tellFortune("lawyer", "London", "chika", 3))
  
  
  // THE PUPPY AGE CALCULATOR
  function calculateDogAge (dogAge){
    let humanAge = 7 * dogAge
    let result = "Your doggie is " + humanAge + " years old in human years!"
    return result 
  
  }
  console.log (calculateDogAge (2))
  console.log (calculateDogAge (5))
  console.log (calculateDogAge (6))
  
  // LIFETIME SUPPY CALCULATOR
  function calculateSupply (age, amountPerDay){
    let nn = 365 * age * amountPerDay
    return result = "You will need " + nn + " of pringles to last you until the ripe old age of " + age 
  }
  console.log(calculateSupply(65, 2))
  console.log(calculateSupply(50, 3))
  console.log(calculateSupply(20, 4))
  
  // The Geometrizer 
  function calcCircumfrence (radius){
    let nn = 2 *  3.14159 * radius
    return result = "The circumference is " + nn
  }
  
  function calcArea (radius){
    let nn = 3.14159 * radius * radius
    return result = "The area is " + nn
  }
  
  console.log (calcCircumfrence(3))
  console.log (calcArea(3))
  
  //The Temperature Converter
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