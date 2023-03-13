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
data.forEach(function(number, check){
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