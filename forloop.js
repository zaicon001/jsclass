
let arr2 = [2,4,3,5,7,4,8,9,11]
// add 10 to all the elemement 
let res1 = []
for (i = 0; i< arr2.length; i++){
  res1.push(arr2[i] + 10) 
}
console.log(res1)

let res2 = []
for (arr in arr2){
  res2.push(arr2[arr] + 10) 
}
console.log(res2)

let res3 = []
for (arr of arr2){
 res3.push(arr + 10) 
}
console.log(res3)

let res4 =[]
arr2.forEach(function(el,i){
  res4.push(el + 10)
})
console.log(res4)

let res5 = []
arr2.forEach(el => res5.push(el + 10))
console.log(res5)



















//Iteration -- Looping

//For
    // normal for
    // - for of 
    // - for in (best for object)
//While
//Do While

// i++ => i = i + 1
// i+=2 => i = i + 2
//for (i=0; i < 100; i++){
    
//     console.log("i am in ")
    
    
// }

// let newArr = [ 34, 56, 21, 89,27] 
// for(let i =0; i<= newArr.length - 1; i++ ){
    
//     if(newArr[i] % 3 === 0){
//         console.log( `${i} - ${newArr[i]}`)
        
//         break
//     }
     
     
// }
//i=0
//i=1
//i=2
//i=3


function forLoop() {
    let str = "The man in the kitchen wants meat" //=> str[0]
    let res = ''
    let skipped = ''
    for (let i =0; i< str.length; i++){
        if(str[i] === 'n'){
            skipped = skipped + str.at(i)
            continue
        }
        res = res + str.at(i)
    }
        return {
            res: res,
            skipped: skipped
        }
}

console.log(skipped)
console.log(res)



arrays
let motors = [ 23, 45, 78 ]

// for(let i = 0; i<=arr.length; i++){
    
//     console.log(arr[i])
    
// }

//for of
for(let motor of motors){
    if(motor === "benz"  ){
        break
    }
    console.log(motor)
}

// for in (for in should only be used on onject)
let arr1 = [3,4,5,6]
for(key in arr1){
res = arr1[i] * 3 
console.log(res)
}

// for off (picks item directly)
for (item of items){

}

