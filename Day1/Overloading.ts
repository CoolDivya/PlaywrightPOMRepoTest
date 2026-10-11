//Constructor  and method overloading: multiple signator with one implementation

class calculator
{
    constructor()

    constructor(a:number,b:number)

    constructor(a?:number,b?:number)
    {
        if(a!==undefined && b!=undefined)
        {
            console.log("sum of a + b : ", a+b)
        }
        else
        {
            console.log("deault constructor invoked")
        }
    }

    //method overloading:

    add(a:number,b:number):number
    add(a:number,b:number,c:number):number

    add(a:number,b:number,c?:number)
    {
       if(c!==undefined)
       {
        return a+b+c
       }
       else
       {
        return a+b
       }
    }
}

let c1 = new calculator()
let c2 = new calculator(10,20)

console.log(c2.add(10,20))
console.log(c2.add(10,20,30))