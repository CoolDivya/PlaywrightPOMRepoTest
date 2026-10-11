// function display(): void
// {
//     console.log("welcome")
// }

// display()

// function addition(x:number,y:number):number
// {
//     return(x+y)
// }

// let z:number = addition(12,30)
// console.log(z)

// function addition(...nums:number[]):number
// {
//     let i;
//     let sum:number=0

//     for(i=0;i<nums.length;i++)
//     {
//         sum=sum+nums[i]
//     }

//     return sum;
// }

// console.log(addition(10,30,40,50))

// function findEelemets(...nums:(number | string)[]): number
// {
//   return nums.length

// }

// console.log(findEelemets(3,"divya",5,"pune"))

// function display(x:number, y:string="divya", id?:string): void
// {
// console.log(x,y)
// if(id !==undefined)
// {
//   console.log(id)
// }
// }

// display(10,undefined,"d")

//Annonymous function

// let msg = function():string
// {
//   return "welcome";
// }

// console.log(msg())

// let msg = function(x:number, y:number):number
// {
//   return x+y;
// }

// console.log(msg(10,30))

// let display=():void=>
// {
//     console.log("welcome divya")
// }
// display();

// let addtion=(a:number,b:number):number=>
// {
//   return a+b
// }

// console.log(addtion(30,56))

// let addtion=(a:number,b:number):number=> a+b


// console.log(addtion(30,56))

// let optparameters = (a:number,b:string,c?:string)=>
// {
//     console.log(a,b)
//     if(c !== undefined)
//     {
//         console.log(c)
//     }
// }

// optparameters(2,"divya")

// let optparameters = (a:number,b:string,c:string="sayali")=>
// {
//     console.log(a,b)
//     if(c !== undefined)
//     {
//         console.log(c)
//     }
// }

// optparameters(2,"divya")

// let optparameters = (...elements:(number|string)[])=> elements.length;

// console.log(optparameters(2,"divya"))

// let optparameters = (...elements:(any|any)[])=> elements.length;

// console.log(optparameters(2,"divya"))

// function greet(msg1:string, smg:(message:string)=>void)
// {
//  console.log(msg1)
//  smg("welcome")
// }

// function showmessage(msg:string)
// {
//     console.log(msg)
// }

// greet("test",showmessage);



// function sum(a:number,b:number,callback:(result:number)=>void)
// {
   
//     callback(a+b)
// }


// //callback function
// function displayResult(result:number):void
// {
//   console.log(result)
// }

// sum(10,20,displayResult)


//function overloading


// function getInfo(id:number):string;
// function getInfo(name:string,surname:string):string;

// function getInfo(p1:number|string,p2?:string):string
// {
//      if(typeof(p1)==='number')
//      {
//             return (`USer id is ${p1}`);
//      }
//      else
//      {
//       return (`USer id is ${p1} ${p2}`);
//      }
// }


// console.log(getInfo("Divyata","Devalekar"))

// //diffferent return types

// function processInput(str:string):string
// function processInput(no:number):number

// function processInput(p1:string|number):string|number
// {
//    if(typeof(p1)==="string")
//    {
//       return p1.toUpperCase();
//    }
//    else
//    {
//       return p1*p1;
//    }

// }

// console.log(processInput("divya"))


function greet(name:string):string
function greet(age:number):string
function greet(isMarried:boolean):string


function greet(p1:number|string|boolean):string
{
  if(typeof(p1)==="number")
  {
    return `p1`;
  }
  else if(typeof(p1)==="string")
  {
    return p1;
  }
  else
  {
    return `p1`;
  }
}

console.log("sayali")



