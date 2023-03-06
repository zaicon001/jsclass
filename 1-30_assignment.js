//1. Write a program to check if a year is leap year or not.
//Nb: If a year is divisible by 4, then it is leap year.
//Sample below
//isLeapYear(2000) - True
//isLeapYear(1998) - False

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log (isLeapYear(2000))
console.log (isLeapYear(1998))

//2. Write a function that accepts 2 parameters,length and breadth 
//of a rectangle, then checks if it is square or not.
//it should return  "This is a square " if the length and square are equal
//and "This is a rectangle" if they are not
//Sample below
//isSquareOrRectangle(5,9) - This is a rectangle
//isSquareOrRectangle(8,8) - This is a Square

function isSquareOrRectangle (length, breadth){
 if (length === breadth) {
   return "This is a square"
 } else {
   return "This is a rectangle"  
 }  
}
console.log (isSquareOrRectangle(5,9))
console.log (isSquareOrRectangle(8,8))

//3.Write a function that allows a shop to give a discount of 10% 
//if the cost of purchased quantity is more than 1000.
//The function should take a parameter for the  quantity
//You can assume 1 unit quantity will cost 100 dollars.
//Output the total cost for the user.

function calcDiscount (quantity){
  let price = quantity * 100
  let discountedPrice = (price - (price * 0.1))
 if (quantity > 1000) {
   return "$"+ discountedPrice
 }else{
   return "$"+  price
 }
}
  
console.log (calcDiscount (1001))
console.log (calcDiscount (100))

// 4. Profitable Gamble
// Create a function that takes three arguments prob, prize, pay 
//and returns true if prob * prize > pay; otherwise return false.
//sample below
//profitableGamble(0.2, 50, 9) ➞ true
//profitableGamble(0.9, 1, 2) ➞ false
//profitableGamble(0.9, 3, 2) ➞ true

function profitableGamble (prob, prize, pay){
  if (prob * prize > pay) {
    return true
  } else {
    return false
  }
}
console.log (profitableGamble(0.2, 50, 9))
console.log (profitableGamble(0.9, 1, 2))
console.log (profitableGamble(0.9, 3, 2))

// 5. Two Makes Ten
//Create a function that takes two arguments.
// Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
//sample below
//makesTen(9, 10) ➞ true
//makesTen(9, 9) ➞ false
//makesTen(1, 9) ➞ true

function makesTen (a, b) {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  } else {
    return false;
  }
}
console.log(makesTen(9, 10))
console.log(makesTen(9, 9))
console.log(makesTen(1, 9))

// 6. Compare Strings by Count of Characters
//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
//Sample below
//comp("AB", "CD") ➞ true
//comp("ABC", "DE") ➞ false
//comp("hello", "edabit") ➞ false

function comp (firstString, secondString){
 if (firstString.length === secondString.length) {
  return true
  } else {
  return false
  } 
}
console.log (comp("AB", "CD"))
console.log (comp("ABC", "DE"))
console.log (comp("hello", "edabit"))

//7. Movie Theatre Admittance
//Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//The person is at least 15 years old.
//They have parental supervision.
//The function accepts two parameters, age and isSupervised. Return a boolean.
//Sample below
//acceptIntoMovie(14, true) ➞ true
//acceptIntoMovie(14, false) ➞ false
//acceptIntoMovie(16, false) ➞ true

function acceptIntoMovie (age, isSupervised){
  if (age >= 15 || isSupervised === true) {
    return true 
    } else {
    return false
    }
}
console.log (acceptIntoMovie(14, true))
console.log (acceptIntoMovie(14, false))
console.log (acceptIntoMovie(16, false))

//8.  Is the String Odd or Even?
//Given a string, return true if its length is even or false if the length is odd.
//Sample below
//oddOrEven("apples") ➞ true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.
//oddOrEven("pears") ➞ false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.
//oddOrEven("cherry") ➞ true

function oddOrEven(string){
  if (string.length % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log (oddOrEven("apples"))
console.log (oddOrEven("pears"))
console.log (oddOrEven("cherry"))


// 9. is the Last Character an "N"?
//Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
//Sample below
//isLastCharacterN("Aiden") ➞ true
//isLastCharacterN("Piet") ➞ false
//isLastCharacterN("Bert") ➞ false
// isLastCharacterN("Dean") ➞ true

function isLastCharacterN (name) {
  let lastCharacter = (name.length- 1)
  if (name.charAt(lastCharacter) === "n"){
    return true
  } else {
    return false
  }
}
console.log (isLastCharacterN("Aiden"))
console.log (isLastCharacterN("Piet"))
console.log (isLastCharacterN("Bert"))
console.log (isLastCharacterN("Dean"))

// 10 Is the Word Singular or Plural?
//Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

//Sample Below
//isPlural("changes") ➞ true
//isPlural("change") ➞ false
//isPlural("dudes") ➞ true
//isPlural("magic") ➞ false

function isPlural (word){
  let lastLetter = (word.length - 1)
  if (word.charAt(lastLetter) ==="s"){
    return true
  }else {
    return false
  }
}
console.log(isPlural("changes"))
console.log(isPlural("change"))
console.log(isPlural("dudes"))
console.log(isPlural("magic"))

//11 The Fifth Argument
//Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".
//Sample below
//fifth(1, 2, 3, 4, 5) ➞ "number"
//fifth("a", 2, 3, true, "five") ➞ "string"
//fifth() ➞ "Not enough arguments"

//function fifth (ar1, ar2, ar3, ar4, ar5) {
  //if (arguments.length < 5) {
    //return "Not enough arguments"
  //} else {
  //  return typeof ar5 
  //}
//}

function fifth (){
  let argsLength = arguments.length
  if (argsLength < 5){
    return "not enough argument"
  }else {
    return typeof(arguments[4])
  }
}

console.log (fifth(1, 2, 3, 4, 5))
console.log (fifth("a", 2, 3, true, "five"))
console.log (fifth())

// 12. Taxi Journey
//A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
//Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.
//Examples
//journeyDistance(3) ➞ 1
// The first kilometer costs $3
//journeyDistance(9) ➞ 4
// The first kilometer costs $3 plus the other three kilometers (costing $2 each)
//journeyDistance(5) ➞ 2

function journeyDistance (cost){
  if (cost <= 3) {
    return 1
  } else {
    return Math.ceil ((cost-3)/2 + 1)
  }
}

console.log (journeyDistance(3))
console.log (journeyDistance(9))
console.log (journeyDistance(5))

//13. Days in a Month
//Create a function that takes the month and year (as integers) and returns the number of days in that month.
//Sample below
//days(2, 2018) ➞ 28
//days(4, 654) ➞ 30
//days(2, 200) ➞ 28
//days(2, 1000) ➞ 28

//function (month, year) {
 //if (year % 4 ) 
//}

//14/ Word without First Character
//Create a function that takes a word and returns the new word without including the first character.

//Sample below
//newWord("apple") ➞ "pple"
//newWord("cherry") ➞ "herry"
//newWord("plum") ➞ "lum"

function newWord (word) {
 let withoutFirstChar = word.substring (1,6) 
  return withoutFirstChar
}
console.log (newWord("apple"))
console.log (newWord("cherry"))
console.log (newWord("plum"))


//15. Concatenating First and Last Character of a String
//Create a function that takes a string and returns the concatenated first and last character.
//Sample below
//firstLast("ganesh") ➞ "gh"
//firstLast("kali") ➞ "ki"
//firstLast("shiva") ➞ "sa"
//firstLast("Salman") ➞ "Sn"
//firstLast("Adeyemi") ➞ "ai"

function firstLast (name){
  let firstChar = (name.charAt(0))
  let lastChar = (name.charAt(name.length - 1))
  return firstChar + lastChar
}
console.log(firstLast("ganesh"))
console.log(firstLast("kali"))
console.log(firstLast("shiva"))
console.log(firstLast("Salman"))
console.log(firstLast("Adeyemi"))

//16. The Study of Wumbology
//Create a function that flips M's to W's (all uppercase).
//Sample below
//wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"
//wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"
//wumbo("WUMBOLOGY") ➞ "WUWBOLOGY"


function wumbo (wumbology){
  return wumbology.replaceall("M", "W")
}

//17. Reverse the Order of a String
//Create a function that takes a string as its argument and returns the string in reversed order.
//Sample below
//reverse("Hello World") ➞ "dlroW olleH"
//reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"
//reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"
  
//18. Check if String Ending Matches Second String
//Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

//Examples
//checkEnding("abc", "bc") ➞ true
//checkEnding("abc", "d") ➞ false
//checkEnding("samurai", "zi") ➞ false
//checkEnding("feminine", "nine") ➞ true
//checkEnding("convention", "tio") ➞ false

function checkEnding(a,b){
  if (a.endswith(b)){
    return true
  }else {
    return false
  }
}

//19. Return the Middle Character(s) of a String
//Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
//Sample below
//getMiddle("test") ➞ "es"
//getMiddle("testing") ➞ "t"
//getMiddle("middle") ➞ "dd"
//getMiddle("A") ➞ "A"


//20. Is the Word Singular or Plural?
//Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

//Sample below
//isPlural("changes") ➞ true
//isPlural("change") ➞ false
//isPlural("dudes") ➞ true
//isPlural("magic") ➞ false

function isPlural (word){
    let lastLetter = (word.length - 1)
    if (word.charAt(lastLetter) ==="s"){
      return true
    }else {
      return false
    }
  }
  console.log(isPlural("changes"))
  console.log(isPlural("change"))
  console.log(isPlural("dudes"))
  console.log(isPlural("magic"))

  //21. Default Mood
//Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
//NB: USe the string interpolation to do this
//Sample below
//moodToday("happy") ➞ "Today, I am feeling happy"
//moodToday("sad") ➞ "Today, I am feeling sad"
//moodToday() ➞ "Today, I am feeling neutral"

function moodToday (mood){
    if (mood ){ 
      return "Today, I am feeling " + mood + ". However,if no argument is passed" 
    } else {
      return "Today, I am feeling neutral"
          }
  }
  console.log (moodToday("happy"))
  console.log (moodToday("sad"))
  console.log (moodToday())
  
  
  
  //22. Case Insensitive Comparison
  //Write a function that validates whether two strings are identical. Make it case insensitive.
  
  //Sample below
  //match("hello", "hELLo") ➞ true
  //match("motive", "emotive") ➞ false
  //match("venom", "VENOM") ➞ true
  //match("mask", "mAskinG") ➞ false
  
  function match (s1, s2){
    let string1 = s1.toLowerCase()
    let string2 = s2.toLowerCase() 
    if (string1 === string2){
      return true
    } else {
      return false
    }
  }
  console.log (match("hello","hELLo"))
  console.log (match("motive", "emotive"))
  console.log (match("venom", "VENOM"))
  console.log (match("mask", "mAskiNG"))

  //23 City School Creating IDS
//Many IDS (for emails or Google ID) are created using the person's name.
//Create a function that will return a four-character ID using the person's first name and last name.
//The first character will be the first letter of the first name but in lowercase. 
//The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

//Sample below
//createID("mary", "lamb") ➞ "mLam"
//createID("John", "SMITH") ➞ "jSmi"
//createID("mary", "smith") ➞ "mSmi"

function createID (fName, lName){
    let firstNameFirstLetter = fName.charAt(0)
    let lastNameFirstLetter = lName.charAt(0)
    let lastTwoLettersOfLName = lName.substring(1,3)
    
    return firstNameFirstLetter.toLowerCase() + lastNameFirstLetter.toUpperCase() + lastTwoLettersOfLName.toLowerCase()
  }
  
  console.log (createID("mary", "lamb"))
  console.log (createID("John", "SMITH"))
  console.log (createID("mary", "smith"))

  //24.  The last time we searched google with word and added spaces at the back of the Word
//Google did some magik there in by changing all the spaces to +
//Now your job is to write a function that does that magik google did the other days
//Function should take aparamter and thne returned a result that has all the space chnagesd to +

//sample below
//google("Enjoying     ") ➞ "Enjoying+++++"
//google("Zulfah  ") ➞ "Zulfah++"

function google (searchname){
  
}

//25. Reverse and Capitalize
//Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

//Sample below
//reverseCapitalize("abc") ➞ "CBA"
//reverseCapitalize("hellothere") ➞ "EREHTOLLEH"
//reverseCapitalize("input") ➞ "TUPNI"

//26. Check if input variable is a number or not
//Write a function isValidNumber that checks if input variable is a
//number or not The function should return “Variable is not a number” if its not and
//return  “Variable is a valid number”.

//NB: hint is read about the isNaN in the mdn docs

//sample below
//isValidNumber(11) //"11 is a valid number"
//isValidNumber("19") //"19 is a valid number"
//isValidNumber("xyz") //"xyz is not a number"
//isValidNumber("17.5") //"17.5 is a valid number"
//isValidNumber("21F") //"21F is not a number" 

function isValidNumber(input) {
    if (isNaN(input)) {
      return input + " is not a number"
    } else {
      return input + " is a valid number"
    }
  }
  
  console.log (isValidNumber(11))
  console.log (isValidNumber("19"))
  console.log (isValidNumber("xyz"))
  console.log (isValidNumber("17.5"))
  console.log (isValidNumber("21F"))

  //27.  Verify the email address
//write a function to determine whether an email address is valid or not.
//NB: An email is valid if it contains "@" sign

//sample below
//isEmailValid("roshbon@gmail.com") ➞ true
//isEmailValid("zaicongmail.com") ➞ false

function isEmailValid(email) {
    if (email.includes("@")) {
      return true
    } else {
      return false
    }
  }
  
  console.log (isEmailValid("roshbon@gmail.com"))
  console.log (isEmailValid("zaicongmail.com"))
  
  //28. Truncate String
  //Write a JavaScript function to extract a specified number of characters from a string starting from the first character
   
  //Sample below
  //truncate_string("Robin Singh",4)  ➞ Robi
  //truncate_string("Ali Akerele",2)  ➞ Al
  
  
  function truncate_string (name, num){
    return name.substring(0, num)
  }
   console.log(truncate_string("Robin Singh",4)) 
   console.log (truncate_string("Ali Akerele",2))
  
  //29. Repeat Data
  //Write a JavaScript function to repeat a string a specified times. It takes 2 parameters
  //The string and the number of repeatition
  
  //sample below
   //repeat_string('Hello', 4)); "Hello Hello Hello Hello"
   //repeat_string('Vote wisely', 2) "Vote wisely Vote wisely"
  
  function repeat_string (string, number) {
    return string.repeat(number)
  }
  console.log (repeat_string('Vote wisely ', 2))
  console.log (repeat_string('Hello ', 4))
  
  
  //30. Hello; Hello World; World
  //Write a function that takes an integer and:
  //If the number is a multiple of 3, return "Hello".
  //If the number is a multiple of 5, return "World".
  //If the number is a multiple of both 3 and 5, return "Hello World".
  //Sample below
  //helloWorld(3) ➞ "Hello"
  //helloWorld(5) ➞ "World"
  //helloWorld(15) ➞ "Hello World"
  
  
  function helloWorld(number) {
    if (number % 5 === 0 && number % 3 === 0) {
      return "Hello World"
    } else if (number % 5 === 0) {
      return "World"
    } else if (number % 3 === 0) {
      return "Hello"
    } else {
      return number + " is not a multiple"
    }
  
  console.log (helloWorld(3))
  console.log (helloWorld(5))
  console.log (helloWorld(15))
  }

  //|| = OR
//new Date()
//new Date().getHours()
//new Date().getMinutes()
//new Date().getFullYear()
//new Date().getMonth()
