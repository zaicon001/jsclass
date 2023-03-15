//Wednesday

//Arrays are data structure (like a container) that holds different data type(boolean, strings, numbers, undefined). 

//Arrays are defined by square bracket. I.e. [ ], or array()

//Let grades = [5,6,7,8, “Afeez”, true]

Grades [0] //– 5 
Grades [1] //– 6


function name (azeez) {
let result = azeez.length
return result
}

console.log(arrLen([2,4,5,6,7])) //—- 5

//—----------------------------------------------------------

 function name (azeez, a, b) {
    let length = azeez.length
    let result = length + a + b
    return result
  }

console.log (arrLen([2,4,5,6,7], 2, 4 )) // – 11


//How to add to an array from the back. (.push)

let numbers = []
numbers.push(10)

//How to remove an array from the back (.pop)

number.pop()

//How to add to an array from the front. (.unshift)


//How to remove an array from the front (.shift)


//Assigning 

let mark = [1,2,3,4,5]

Mark[1] = 12 
Console.log ([mark]) // 1,12,3,4,5

//Friday

//String to Array

let string = 'Abayomi Adewale'
    stringToArray = string.split('') //—-- [ “A”, “b”,.....}
    stringToArray = string,splt('y') //—- //[ “Aba”, “omi” “Adewale]  — //It will remove whatever you split.
    stringToArray = string,splt(' ')// —- //[ “Abayomi” “Adewale”]

//Array to String

let data = ["the man is in the kitchen"]
let res = data.join()// —----- //“the”, “man”, “is”, “in”, “
let res1 = data.join( '')// —------//”themanisinthekitchen”
let res2 = data.join(' ') //—---  //“the man is in the kitchen”
let res3 = data.join('k')// — //thekmankiskinkthekkitchen




function isVowel(a){
  if(a.includes("a")|| a.includes("e")|| a.includes("i")|| a.includes("o") || a.includes("u")){
   return true
} else {
  return false
 }
}

function uefaEuro2016(team, scores){
  if (scores [0] > scores [1]){
   return  " At match " + teams [0] + "-" + teams [1] + "," + teams [0] + "won"
}else if (scores [0] < scores [1]){
  return   " At match " + teams [0] + "-" + teams [1] + "," + teams [1] + "won"
   } else {
    return  " At match " + teams [0] + "-" + teams [1] + "," + "teams played draw"
   }
  }
  
  


function array(arr){
 if (arr.length <= 2){
   return null
 }else{
   let res = x.substring(1, arr.length - 1)
   let newres = res.replaceAll(",", " ") 

   return newres.trim()
 }
}

//FOR EACH 
let scores = [23,33.5,44,66,"nike"]

scores.forEach(function check(score){
 console.log(score)
})

scores.forEach(function check(score,index){
    console.log(score,index)
    })
    
    names = ['Abayomi Adewale', 'Folarin Niyi', 'Coker Aguda', 'Ahmed Bold']
    
    name.forEach (function(name, index){
      let item = name.substring(name.length - 1)// to get the last character OR
     let items = name.split(' ')// ['Abayomi', 'Adewale']
    
      console.log(item[1].substring(item[1]).length - 1)
    
    })
    
   //SORT 
    
    number.sort(function(a,b){
      
    })

 //Week 9 (13/03/2023)
//Monday


//SUM of Arrays 

function sumArr(data1){
let sum = 0
data1.forEach(function(number, check){
sum = sum+ number
})
return sum
}

Or // If number of element in an array is known.
let data2 = [1,2,3,4,5,6]
let sum = data2[0] + data2[1] + data2[2] + data2[3] + data2[4]
return sum 

//Average of Arrays 

function averageArr(data){
let sum = 0
data.forEach(function check 
  (number, index){
sum = sum + number
})
return sum / data.length
}

//SORT 
let data3 = [3,6,8,9,1]
data3.sort(function(a,b){
return b - a
})

//FILTER 
data.filter(function(a) {
return  a % 2 !== 0 // to find odd numbers
})

let arr1 = [1,2,3,4,5,6]
let arr2 = []
arr1.forEach(function(number,index){
  return arr2.push(number * 5)
})

//MAP // Map is same thing as forEach, however, forEach has memory implication(low), while, .map has speed implication(fast).

const mutliplyBy5 = arr1.map(function(number, index){
return number * 5

})

 let result = nums.map(function(number, index){
let ans =  nums[nums[index]]

 })
 return ans.push

 //Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

//Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 

//Example 1:

//Input: nums = [2,5,1,3,4,7], n = 3
//Output: [2,3,5,4,1,7] 
//Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
//Example 2:

//Input: nums = [1,2,3,4,4,3,2,1], n = 4
//Output: [1,4,2,3,3,2,4,1]
//Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
 

Constraints:

1 <= n <= 500
nums.length == 2n
1 <= nums[i] <= 10^3


let numsLength = nums.length
let xOneToN = numsLength / 2 
let yOneToN = nums[xOneToN - 1]

nums.forEach(function(number,index){
 return 
})


    //BREAKOUT SESSION ......

    // FOR EACH 

    let arr = [10,20,30,40,50]
    arr[0] + 10
    arr[1] + 10
    arr[2] + 10
    arr[3] + 10
    arr[4] + 10
  
    arr.forEach(function saeed(){
      //logic
      return
    }) // forEach method. A callback is a function that is passed as a parameter

    arr.forEach(function (){
      //logic
      return
    }) // A function without a function name is called ANONYMOUS FUNCTION 

    // forEach expect two parameters to be passed inside its function. 

    arr.forEach(function(item, index){
      return arr + 10 
    })

    //Write a function that brings all the items, and index in a bracket. i.e. (item[0], index), (item[1], index) etc. 

    let arrRes = []
    arr.forEach(function(item, index){
      //arrRes.push(`(${item}, ${index})`)
      arrRes.push("(" + item + "," + index + ")")
    })
    console.log(arrRes)

    // It'll return ['(10,0)','(20,1)','(30,2)', '(40,3)', '(50,4)']

    let array = [10,20,30,40,50]
    let results = []
    arr.forEach(function(item, index){
      results.push(item * 5)
    })
    console.log(results)

// SORT 
//SORT WITH NOT PARAMETERS 
let numb = ["zain", "ayo", "ade","tola", "tolami", "chika"]
console.log(numb.sort()) // ["ade", "ayo", "tola", "tolami", "chika", "zain"]


let arr3 = [34,30,1,130,10,20,301,40,50]
console.log(arr3.sort()) // [1,10,130,20,30,301,34,40,50] According to ASCII




