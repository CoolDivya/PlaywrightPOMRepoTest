// //Declare and store values in Arrays

// //1. using leteral
// let ename:string[] = []; //declaration

// //initialization
// ename[0] = "divya"
// ename[1] = "sayali"
// ename[2] = "gauri"
// ename[3] = "shivani"

// //OR combines

// let ename2:string[] = ["diya","neha","priya"]

// console.log(ename)

//2. using generic way / using Array<T>  keyword

let ename:Array<string> = ["anaya","neha","raj"]

let data:Array<string|number> = [23,12,45,"neha",34,"harsh","prachi"]

let data2:Array<any> = [23,34,"aa",true,"b","tt",12,null]

// console.log(data[2])
// console.log("length:",data.length)

//iterating over array using traditional For loop

// for(let i=0;i<ename.length;i++)
// {
//     console.log(ename[i])
// }

// //another way using For...in loop

// for(let i in ename)
// {
//     console.log(ename[i])
// }

// //another way for...of loop not using indexing
// for(let value of data2)
// {
//  console.log(value)
// }


// // Passing Array variable to function
// //search value inside aaray using function

// function searchValue(searchValue:number,array:number[]):boolean
// {
//    for(let i=0;i<array.length;i++)
//    {
//     if(array[i]===searchValue)
//     {
//         return true;
//     }
//    }
//    return false;

// }

// let a:Array<number> =[20,23,45]

// console.log(searchValue(10,a))

// //function can take parameter as array and return array

// function capitalizeWords(arr1:string[]):string[]
// {
//     let result:string[]=[];

//     for(let i=0;i<arr1.length;i++)
//     {
//         result[i]=arr1[i].toUpperCase();   
//     }

//     return result;
// }

// let worlds:Array<string> = ["aaa","rohan","divya"]

// console.log(capitalizeWords(worlds))


// let person:[string,number]=["divya",34]
// console.log(person[0])
// console.log(person[1])

// let data1:[string,number,boolean,string,number]=["diya",45,true,"neha",34]
// console.log(data1)

// for(let i=0;i<data1.length;i++)
// {
//     console.log(data1[i])
// }

// for(let i in data1)
// {
//     console.log(data1[i])
// }

// for(let value of data1)
// {
//     console.log(value)
// }

//Create array of tuple
let student:[number,string][]=[[7,"divya"],[8,"Rohan"],[9,"sayali"],[10,"Devraj"]]
//console.log(student[0]) -> [ 7, 'divya' ]
let tp =student[0]
//console.log(tp[0]) => gives 7

