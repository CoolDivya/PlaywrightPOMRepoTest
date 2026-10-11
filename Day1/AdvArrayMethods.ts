// 1. forEach():Executes a function once for each array element
// It takes function as a parameter
// array.forEach(function(currentvalue, index, array){})
//currentvalue : it is represent current element in array
//index(optional): index of current element in array
//array(optional): name of array of current element belongs to

//Get index of all the fruites along with its names
//using normal loop 

//let fruites:string[] = ["banana","apple","kiwi"]

// for(let i in fruites)
// {
//     console.log(i,fruites[i])

// }

// //Do same above using forEach()

// fruites.forEach(function(element,index){

//     console.log(`${index}`,`${element}`)
//})

//using Arrow function

// //Do same above using forEach()

// fruites.forEach((element,index)=>{

//     console.log(`${index}`,`${element}`)
// })

//

// //convert names into uppercase

// let fruites:string[] = ["banana","apple","kiwi"]

// fruites.forEach((element)=>{
//     console.log(element.toUpperCase())
// })




//2. map() : it creates a new array with the result of calling the function on every element of an array
//it takes functions as a parameter
//returns same number of  elements that we have in original value
// array.map(function(currentvalue,index(optional),array(optional)))

//Get squeare of all the element in array [1,2,3,4,5,6] and return [ 1, 4, 9, 16, 25, 36 ]

// let data:number[]=[1,2,3,4,5,6]

// let data1=data.map(function(element){
//     return element%2==0
// })

// console.log(data1)



// let data12=data.map((element) => element+element) //with Arrow function if only single return statement then {} and return statement
// //is optional
// console.log(data12)


//3. filter() = It creates a new array with all the elements that pass or satisfy the function
//it takes function as a parameters
//returns either same no of element or not
//array.filter(function(elements, index(opt),array(opt)))

// let data:number[]=[2,5,8,24,12,87,34]

// //find even numbers
// let even_numbers = data.filter(function(element){

    
//         return element%2==0;
    
// })

// console.log(even_numbers)

//find nos greadter than 3 and  using arrow function

// let data2 = data.filter((element)=> element>3)
// console.log(data2)

//4. reduce() = applies function on every element of an array and returns a single value
// array.reduce(function(accumulator, currentElement, index,array){ })
//accumulator = means final element like total, result

// Get sum of all the elements in array

//normal for loop
// let data:number[]=[2,5,8,24,12,87,34]
// let total =0   // total is accumulator

// for(let i=0;i<data.length;i++)
// {
//     total = total+data[i] // 2, 7, 
// }

// console.log(total)

// //using reduce medthod and using arrow function

// let reduce_Data= data.reduce((total,element)=> total+element,0) // by default it will take total is 0 also if we want to
// // specify defaukt value for accumulator total = 0
// console.log(reduce_Data)

//5. some() = checks if any elemet satisfies condition, at least one element
//returns true if at least one element satisfies condition else false
// array.some(function(currentlememnt,index,array){})

//check if numbers 5 is available in array

// let numbers:number[]=[2,4,5,1,6,8]

// let no=numbers.some((element)=> element == 5)
// console.log(no) // true


//5. every() = checks if all elements satisfies condition, 
//returns true if at all element satisfies condition else false
// array.some(function(currentlememnt,index,array){})

let numbers:number[]=[2,4,5,1,6,8]

// let no=numbers.every((element)=> element == 5)
// console.log(no) // false

let no = numbers.every((element) => element%2 ==0 )
console.log(no) // false

let no1 = numbers.every((element) => element >=1)
console.log(no1) // false



