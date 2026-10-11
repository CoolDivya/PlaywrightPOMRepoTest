// let array1:Array<number> = [23,34,56,78,12]
//  let array2:Array<string> = ["divya","rohan","sayali"]

// //lenth
// console.log("size of array1:",array1.length)

// //1. Push :add single/multiple element at end of an array
// //array.push(ele1, ele2,....)

// array1.push(5,11)
// console.log(array1)

// //2. Pop : removes last element from array
// //array.pop()

// array1.pop()
// console.log(array1)

// //3. Shift :removes first element from an array
// //array.shift()

// let array1:Array<number> = [23,34,56,78,12]
// let array2:Array<string> = ["divya","rohan","sayali"]

// let first_Ele= array2.shift()
// console.log(first_Ele)
// console.log(array2)

// //4. Unshift: adds element single/multiple ar begining of array
// //array.unshift(arr1,...)

// array2.unshift("raj","riyas","rahi")
// console.log(array2)

 let array1:Array<number> = [23,34,56,78,12]
 let array2:Array<string> = ["divya","rohan","sayali"]

 //5. concat: combines 2 or more array of same type
 //array.concat(array1,...)
//  let concat_Array= array1.concat([35,67],[78,99])
//  console.log(concat_Array)

// //slice(): it will extract section of an array
// //array.slice(start_index,end_index)
// let array3=array1.slice(1,3)
// console.log(array3) -> [ 34, 56 ]
// let array3= array2.slice(1,3)
// console.log(array3)

//7.Splice() :add/removes single/multiple elements from an array(anywhere))
//array.splice(start,deletecount,item1,...N)
//start - starting index, deltecount - from starting index how mnay values we want to delete that deletion count 
//item1,...N - aitems needs to be add



//let ele =data1.splice(1,2) //here 1 is start index and 2 is how many elements to be removed from start index
//console.log(ele) //[ 'kiwi', 'mango' ]

//console.log(data1) // [ 'apple', 'banana', 'orange' ]

// data1.splice(1,0,'pinapple','grape')
// console.log(data1) //it is adding new to elements after first element. o/p [
//   'apple',  'pinapple',
//   'grape',  'kiwi',
//   'mango',  'banana',
//   'orange'
// ]

// data1.splice(2,4,"grape","lemon")
// console.log(data1)



//index of(): find index of element, if element not found then return -1
//array.indexof(ele)

// let index=data1.indexOf("kiwi")
// console.log(index)  // 1

// let index1=data1.indexOf("pinapple")
// console.log(index1)  // -1

// //index of(): find index of element, if element not found then return -1
// //array.indexof(ele, start index)

// let index2=data1.indexOf("kiwi",3) // search kiwi after 3rd index
// console.log(index2)  // -1

// //includes() = check if elements exist or not it returns true or false
// //array.includes(ele,index(optional))

// let d1=data1.includes("apple")
// console.log(d1) //true


// let d2=data1.includes("cherry")
// console.log(d2) //false


// let d3=data1.includes("apple",1)
// console.log(d3) //false

let data1:Array<string> =["apple","kiwi","mango","banana","orange"]

//tostring()= converts array to string
//array.tostring()

let str:string=data1.toString()
console.log(str) //apple,kiwi,mango,banana,orange
