//1. Return the Sum of Two Numbers. 
// Write a function that takes two numbers as arguments and returns their sum.
// samples below
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

function sum(num1, num2){
    return num1 + num2
  }
  console.log(sum(3,2))
  console.log(sum(-3,-6))
  console.log(sum(7,3))
  
  //2. Return the Next Number from the Integer Passed
  //Write a function that takes a number as an argument, increases the number by 1 and returns the result.
  
  //samples below
  //nextNumber(0) ➞ 1
  //nextNumber(9) ➞ 10
  //nextNumber(-3) ➞ -2 
  
  function nextNumber (integer){
    return integer + 1
  }
  console.log(nextNumber(0))
  console.log(nextNumber(9))
  console.log(nextNumber(-3))
  
  //3. Convert Age to Days
  //Write a function that takes the age in years and returns the age in days.
  //samples below
  //calcAge(65) ➞ 23725
  //calcAge(0) ➞ 0
  //calcAge(20) ➞ 7300
  
  function calcAge(age){
     return age * 365
  }
  console.log(calcAge(65))
  console.log(calcAge(0))
  console.log(calcAge(20))
  
  
  
  //4. Power Calculator
  //Write a function that takes voltage and current and returns the calculated power. NB: power = voltage * current
  //samples below
  // circuitPower(230, 10) ➞ 2300
  //circuitPower(110, 3) ➞ 330
  //circuitPower(480, 20) ➞ 9600
  
  function circuitPower (voltage, current){
    return voltage * current
  }
  console.log(circuitPower(230,10))
  console.log(circuitPower(110,3))
  console.log(circuitPower(480,20))
  
  
  //5. Return Something to Me!
  //Write a function that returns the string "something" joined with a space " " and the given argument a.
  //sample below
  //giveMeSomething("is better than nothing") ➞ "something is better than nothing"
  //giveMeSomething("Bob Jane") ➞ "something Bob Jane"
  //giveMeSomething("something") ➞ "something something"
  
  function giveMeSomething (word){
    return "something " + word
  }
  console.log(giveMeSomething("is better than nothing"))
  console.log(giveMeSomething("Bob Jane"))
  console.log(giveMeSomething("something"))
    
  // 6. Concatenate First and Last Name into One String
  // Write a function that takes 2 parameters firstName and lastName, return a single string in the format "last, first."
  //sample below
  //concatName("Johnny", "Bravo") ➞ "Last, First"
  //concatName("John", "Doe") ➞ "Doe, John"
  // concatName("Mary", "Jane") ➞ "Jane, Mary"
  
  function concatName(firstName, lastName){
    return "\" " + lastName + "," + firstName + "\" "
  }
  console.log(concatName("Johnny","Bravo "))
  console.log(concatName("John","Doe "))
  console.log(concatName("Mary","Jane "))
  
  //7. Return the Remainder from Two Numbers
  // Write a function that takes two numbers as arguments and returns the remainder of the first number divided by the second number.
  //sample below
  //remainder(1, 3) ➞ 1
  // remainder(3, 4) ➞ 3
  //remainder(-9, 45) ➞ -9
  
  function remainder (num1, num2){
    return num1 % num2
  }
  console.log(remainder(1,3))
  console.log(remainder(3,4))
  console.log(remainder(-9,45))
  
  //8. Return Negative
  //Write a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
  //sample below
  //returnNegative(4) ➞ -4
  //returnNegative(15) ➞ -15
  //returnNegative(-4) ➞ -4
  //returnNegative(0) ➞ 0
  function returnNegative (numb1){
    return Math.abs(numb1)
  }
  console.log(returnNegative(4))
  console.log(returnNegative(15))
  console.log(returnNegative(-4))
  console.log(returnNegative(0))
  
  //9. String and Number Conversions
  //Write a function that takes a string and returns it as an integer.
  //sample below
  //intToString(4) ➞ "4"
  //stringToInt("4") ➞ 4
  
  function intToString(int){
    return String(int) // "string" will convert other datatype to string"
  }
   console.log(intToString(4))
  
  function stringToInt (string){
    return Number(string) // "Number" will convert other datatype to Number"
  }
  console.log(stringToInt("4"))
    
  
  //10. Four Passengers and a Driver (Here a bit problem solving, you have to think of the solution before you code)
  //A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
  //sample below
  //carsNeeded(5) ➞ 1
  //carsNeeded(11) ➞ 3
  //carsNeeded(0) ➞ 0
  
  function carsNeeded (noOfPeople){
   let result = Math.ceil (noOfPeople /5)
    return result
  }
  console.log(carsNeeded(5))
  console.log(carsNeeded(11))
  console.log(carsNeeded(0))
  
  //11. Return the Total Number of Parameters (Here's another bit of problem solving
  //Write a function that returns the total number of parameters passed in.
  //sample below
  // numberArgs("a", "b", "c") ➞ 3
  //numberArgs(10, 20, 30, 40, 50) ➞ 5
  //numberArgs(x, y) ➞ 2
  // numberArgs() ➞ 0
  
  function numberArgs(){
    let result = arguments.length
    return result
  }
  console.log (numberArgs("a", "b", "c"))
  console.log (numberArgs(10, 20, 30, 40, 50))
  console.log (numberArgs("x", "y"))
  console.log (numberArgs())
  
  
  
  //12. WordCharWord
  //Write a function that takes 2 argument. The function will put the first argument(that should be a character), in the begining and the end of the second argument, a string.
  //sample below
  //wordCharWord("R", "javascript is fun") ➞ "R javascript is fun R"
  //wordCharWord("#", "hello world!") ➞ "# hello world! #"
  //wordCharWord("his", "lets jump on code ") ➞ "# lets jump on code #"
  
  function wordCharWord (word1, word2){
   return "\" " + word1 + word2 + word1 + "\" "
  }
    console.log (wordCharWord(" R ", "javascript is fun"))
    console.log (wordCharWord("#", "hello world!"))
    console.log (wordCharWord("his", "lets jump on code "))
  
  //13. Stuttering Function
  //Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
  //sample below
  //stutter("incredible") ➞ "eerrm... errrm... incredible?"
  //stutter("enthusiastic") ➞ "eerrm... eerrm... enthusiastic?"
  //stutter("outstanding") ➞ "eerrm... eerrm... outstanding?"
  
  function stutter (word){
    return "eerrm.... eerrm..." + word + "?" 
  }
  console.log(stutter("incredible"))
  console.log(stutter("enthusiastic"))
  console.log(stutter("outstanding"))
  
  
  //14. Write a funtion that returns the type of a parameter passed to it.
  //sample below
  //typeOf(1) ➞ "number"
  //typeOf("a") ➞ "string"
  //typeOf("The man ran away") ➞ "string"
  
  
  function typeOf(params){
    return typeof(params)
  }
  console.log (typeOf(1))
  console.log (typeOf("a"))
  console.log (typeOf("The man ran away"))
  
  //15. 
  //gWrite a function that takes a number as an argument and returns the square root of that number.
  //sample below
  //squareRoot(9) ➞ 3
  //squareRoot(16) ➞ 4
  //squareRoot(25) ➞ 5
  
  function squareRoot(num){
    let result = Math.sqrt (num)
    return result
  }
  console.log(squareRoot(9))
  console.log(squareRoot(16))
  console.log(squareRoot(25))
  console.log(squareRoot(36))