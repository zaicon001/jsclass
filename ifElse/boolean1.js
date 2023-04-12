// 1. Write a program to check if a year is leap year or not.
// Nb: If a year is divisible by 4, then it is leap year.
// Sample below
// isLeapYear(2000) - True
// isLeapYear(1998) - False
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isLeapYear(1998))
console.log(isLeapYear(2000))

// 2. Write a function that accepts 2 parameters,length and breadth 
// of a rectangle, then checks if it is square or not.
// it should return  "This is a square " if the length and square are equal
// and "This is a rectangle" if they are not
// Sample below
// isSquareOrRectangle(5,9) - This is a rectangle
// isSquareOrRectangle(8,8) - This is a Square
function isSquareOrRectangle(length, breadth) {
    if (length === breadth) {
        return `This is a square`
    } else {
        return `This is a rectangle`
    }
}
console.log(isSquareOrRectangle(5,9))
console.log(isSquareOrRectangle(8,8))

// 3. Write a function that allows a shop to give a discount of 10% 
// if the cost of purchased quantity is more than 1000.
// The function should take a parameter for the  quantity
// You can assume 1 unit quantity will cost 100 dollars.
// Output the total cost for the user.
function giveDiscount(costOfPurchase) {
    if (costOfPurchase > 1000) {
       let discount = ((10 / 100) * costOfPurchase)
       let newCostOfPurchase = costOfPurchase - discount
       return `Thank you for shopping with us
                You are eligible to 10% discount.
                The cost of your purchase is ${newCostOfPurchase}`
    } else {
        return `Thank you for shopping with us
                You are not eligible to our discount`
    }
}
console.log(giveDiscount(900))
console.log(giveDiscount(10000))

// 4.  Profitable Gamble
// Create a function that takes three arguments prob, prize, pay 
// and returns true if prob * prize > pay; otherwise return false.
// sample below
// profitableGamble(0.2, 50, 9) ➞ true
// profitableGamble(0.9, 1, 2) ➞ false
// profitableGamble(0.9, 3, 2) ➞ true
function profitableGamble(prob, prize, pay) {
    if((prob * prize) > pay){
        return true
    }else{
        return false
    }
}
console.log(profitableGamble(0.2, 50, 9))
console.log(profitableGamble(0.9, 1, 2))
console.log(profitableGamble(0.9, 3, 2))

// 5. Two Makes Ten
// Create a function that takes two arguments.
//  Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// sample below
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true
function makesTen(num1 ,num2) {
    if ((num1,num2 === 10) || (num1 + num2 === 10)) {
        return true
    } else {
        return false
    }
}
console.log(makesTen(9, 10))
console.log(makesTen(9,9))
console.log(makesTen(1,9))

// 6. Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Sample below
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false


// 7. Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
// Sample below
// acceptIntoMovie(14, true) ➞ true
// acceptIntoMovie(14, false) ➞ false
// acceptIntoMovie(16, false) ➞ true


// 8. Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

// Sample below
// oddOrEven("apples") ➞ true
// // The word "apples" has 6 characters.
// // 6 is an even number, so the program outputs true.

// oddOrEven("pears") ➞ false
// // "pears" has 5 letters, and 5 is odd.
// // Therefore the program outputs false.

// oddOrEven("cherry") ➞ true


// 9. Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Sample below
// isLastCharacterN("Aiden") ➞ true
// isLastCharacterN("Piet") ➞ false
// isLastCharacterN("Bert") ➞ false
// isLastCharacterN("Dean") ➞ true


// 10. Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// Sample Below
// isPlural("changes") ➞ true
// isPlural("change") ➞ false
// isPlural("dudes") ➞ true
// isPlural("magic") ➞ false


// 11. The Fifth Argument
// Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".
// Sample below
// fifth(1, 2, 3, 4, 5) ➞ "number"
// fifth("a", 2, 3, true, "five") ➞ "string"
// fifth() ➞ "Not enough arguments"


// 12.Taxi Journey
// A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
// Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.

// Examples
// journeyDistance(3) ➞ 1
// // The first kilometer costs $3
// journeyDistance(9) ➞ 4
// // The first kilometer costs $3 plus the other three kilometers (costing $2 each)
// journeyDistance(5) ➞ 2



// 13. Days in a Month
// Create a function that takes the month and year (as integers) and returns the number of days in that month.

// Sample below
// days(2, 2018) ➞ 28
// days(4, 654) ➞ 30
// days(2, 200) ➞ 28
// days(2, 1000) ➞ 28


// 14. Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

// Sample below
// newWord("apple") ➞ "pple"
// newWord("cherry") ➞ "herry"
// newWord("plum") ➞ "lum"



// 15. Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

// Sample below
// firstLast("ganesh") ➞ "gh"
// firstLast("kali") ➞ "ki"
// firstLast("shiva") ➞ "sa"
// firstLast("Salman") ➞ "Sn"
// firstLast("Adeyemi") ➞ "ai"


// 16. The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).

// Sample below
// wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"
// wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"
// wumbo("WUMBOLOGY") ➞ "WUWBOLOGY"


// 17. Reverse the Order of a String
// Create a function that takes a string as its argument and returns the string in reversed order.

// Sample below
// reverse("Hello World") ➞ "dlroW olleH"
// reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"
// reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"


// 18. Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

// Examples
// checkEnding("abc", "bc") ➞ true
// checkEnding("abc", "d") ➞ false
// checkEnding("samurai", "zi") ➞ false
// checkEnding("feminine", "nine") ➞ true
// checkEnding("convention", "tio") ➞ false



// 19. Return the Middle Character(s) of a String
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

// Sample below
// getMiddle("test") ➞ "es"

// getMiddle("testing") ➞ "t"

// getMiddle("middle") ➞ "dd"

// getMiddle("A") ➞ "A"


// 20. Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// Sample below
// isPlural("changes") ➞ true
// isPlural("change") ➞ false
// isPlural("dudes") ➞ true
// isPlural("magic") ➞ false

// 21. Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// NB: USe the string interpolation to do this
// Sample below
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday("sad") ➞ "Today, I am feeling sad"
// moodToday() ➞ "Today, I am feeling neutral"


// 22. Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

// Sample below
// match("hello", "hELLo") ➞ true
// match("motive", "emotive") ➞ false
// match("venom", "VENOM") ➞ true
// match("mask", "mAskinG") ➞ false

// 23. City School Creating IDS
// Many IDS (for emails or Google ID) are created using the person's name.
// Create a function that will return a four-character ID using the person's first name and last name.
// The first character will be the first letter of the first name but in lowercase. 
// The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

// Sample below
// createID("mary", "lamb") ➞ "mLam"
// createID("John", "SMITH") ➞ "jSmi"
// createID("mary", "smith") ➞ "mSmi"


// 24.  The last time we searched google with word and added spaces at the back of the Word
// Google did some magik there in by changing all the spaces to +
// Now your job is to write a function that does that magik google did the other days
// Function should take aparamter and thne returned a result that has all the space chnagesd to +

// sample below
// google("Enjoying     ") ➞ "Enjoying+++++"
// google("Zulfah  ") ➞ "Zulfah++"



// 25. Reverse and Capitalize
// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

// Sample below
// reverseCapitalize("abc") ➞ "CBA"
// reverseCapitalize("hellothere") ➞ "EREHTOLLEH"
// reverseCapitalize("input") ➞ "TUPNI"

// 26. Check if input variable is a number or not
// Write a function isValidNumber that checks if input variable is a
// number or not The function should return “Variable is not a number” if its not and
// return  “Variable is a valid number”.

// NB: hint is read about the isNaN in the mdn docs

// sample below
// isValidNumber(11) //"11 is a valid number"
// isValidNumber("19") //"19 is a valid number"
// isValidNumber("xyz") //"xyz is not a number"
// isValidNumber("17.5") //"17.5 is a valid number"
// isValidNumber("21F") //"21F is not a number" 

// 27.  Verify the email address
// write a function to determine whether an email address is valid or not.
// NB: An email is valid if it contains "@" sign

// sample below
// isEmailValid("roshbon@gmail.com") ➞ true
// isEmailValid("zaicongmail.com") ➞ false

// 28. Truncate String
// Write a JavaScript function to extract a specified number of characters from a string starting from the first character
 
// Sample below
// truncate_string("Robin Singh",4))  ➞ Robi
// truncate_string("Ali Akerele",2))  ➞ Al

// 29. Repeat Data
// Write a JavaScript function to repeat a string a specified times. It takes 2 parameters
// The string and the number of repeatition

// sample below
//  repeat_string('Hello', 4)); "Hello Hello Hello Hello"
//  repeat_string('Vote wisely', 2) "Vote wisely Vote wisely"


// 30. Hello; Hello World; World
// Write a function that takes an integer and:
// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
// Sample below
// helloWorld(3) ➞ "Hello"
// helloWorld(5) ➞ "World"
// helloWorld(15) ➞ "Hello World"