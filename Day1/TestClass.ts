// //Read only properties : use readonly keyword means we can assign value to that variable only once.
// //    readonly id:number; -> we can assign value only one time inside the constructor, we
// //cant modify value

// //optional property: means it is not mandatory to add value to this variable for this use '?' after variable name
// //email?:string; so defined value is undefined if we are not assigning any value

// class Student
// {
    
//     //properties
//     readonly id:number;  //read only peoperty
//     sname:string; //rugualr property
//     email?:string;
//     school_name:string; //rugualr property

//     //create constructor
//     constructor(id:number,sname:string,email?:string)
//     {
//         this.id = id
//         this.sname = sname
//         this.email = email
//     }

//     //Method
//     displayInfo():void
//     {
//         console.log(this.id)
//         console.log(this.sname)
//         if(this.email)
//         {
//            console.log(this.email)
//         }
//         else
//         {
//             console.log("email not provided")
//         }
        
//     }
    
// }

// // We can create object using class.
// // create object

// let s1=new Student(102,"divya")
// let s2= new Student(101,"neha","abc@tcs.com")

// //original values
// console.log(s1.displayInfo())
// console.log(s2.displayInfo())

// //try to modify id value of s1 object
// s1.id = 23  // we cant modify it because it is read only property
// s1.sname ="neha"


// Static properties and methods
//static property : common/ shared property across all the objects and it is shared by all
//objects and variables
// it can be access directly using class name
// static can be property and method, are shared across all objects
//static prioperties can be accessed thrigh class name directly
// static properties/methods can be modified by any object and it will automatucally reflect in all object.


class Student
{
    
    //properties
    readonly id:number;  //read only peoperty
    sname:string; //rugualr property
    email?:string;
    static school_name:string = "ues"//rugualr property

    //create constructor
    constructor(id:number,sname:string,email?:string)
    {
        this.id = id
        this.sname = sname
        this.email = email
    }

    //Method
    displayInfo():void
    {
        
        console.log("School name: ",Student.school_name)  // static variable access using class name
        if(this.email)
        {
           console.log(this.email)
        }
        else
        {
            console.log("email not provided")
        }
        
    }

    //change school name
    static changeSchoolName(newName:string):void{
        Student.school_name = newName


    }

    
}

// We can create object using class.
// create object

let s1=new Student(102,"divya")
let s2= new Student(101,"neha","abc@tcs.com")

s1.displayInfo()
//change the school name
Student.changeSchoolName("new School")  // access static method using class name
s1.displayInfo()
s2.displayInfo()












