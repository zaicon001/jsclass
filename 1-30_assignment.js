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

function fifth (ar1, ar2, ar3, ar4, ar5) {
  if (arguments.length < 5) {
    return "Not enough arguments"
  } else {
    return typeof ar5 
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

//function checkEnding (firstString, secondString) {
  //firstStringEnds = firstSrting.substring (0,4)
//}

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
    if (mood === null){ 
      return "Today, I am feeling neutral" 
    } else {
      return "Today, I am feeling " + mood + ". However,if no argument is passed"
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
