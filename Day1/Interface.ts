/*
Interface:
 is a way to define the structure of object
 it tells compiler what properties and types an object should have
 it is like a blueprint of object
 It is like class
 we can apply inheritance like class
 it contains properties and methods , also methods are abstract methods

 Abstract methods: methods with signature and there is no impelenetation


*/

// // 1. Basic interface
// interface Student { 
//     sname: string; 
//     sage: number; 
// } 

// // Correct syntax using an object literal with a type annotation
// let student: Student = { 
//     sname: "divya", 
//     sage: 34 
// }; 

// console.log(student.sname); 
// console.log(student.sage);


// 2.Interface using Regular properties (?) and read only properties (assign data only once)

// interface Employee{
//     eid:number,
//     ename:string,
//     dept?:string,
//     readonly subject:string 
// }

// let emp:Employee={
//     eid:21,
//     ename:"divya",
//     subject : "English"
// }





// console.log(emp.eid)
// console.log(emp.ename)
// console.log(emp.subject)
// console.log(emp.dept) // undefined

// let emp2:Employee={
//     eid:21,
//     ename:"divya",
//     dept : "IT",
//     subject: "maths"
// }

// console.log(emp2.dept)  // IT

// console.log(emp2.subject)  // IT

// //3. Interface using read only properties and function type

// // declare interface
// interface Book
// {
//     title:string
//     readonly isbn: string
//     display():void  //abstract method
// }

// assigne properties to object and created object

// let b1: Book={
//     title:"learn playwright",
//     isbn: "abcd",

//     display() {
//         console.log(b1.isbn, b1.title)
//     }
// }

// // // access properties
// console.log(b1.title)
// // console.log(b1.isbn)
// console.log(b1.display())

// //try to change data for title and isbn
// b1.title = "learn typescript"
// console.log(b1.title)

// b1.isbn = "efgh" // we cant change it is readonly

// // Inheritance in interafce

// interface Animal{

//      aname:string
// }

// interface Dog extends Animal{
//      color:string
// }

// let dog: Dog={
//     aname: "abc",
//     color: "white"
// }

// console.log(dog.aname, dog.color)

/*
1. class can extends another class
2. interface can extends another interface
3. class can implements interface: because inetrface contains abstract methods we can implement those in subclass
*/

// class can implements interface

interface Animal{
    aname: string
    
    sound():void
}

// // we need to redefine whatever defined in parent interface
class Dog implements Animal{
    aname: string;
    color:string
    constructor(aname:string, color:string)
    {
        this.aname = aname
        this.color = color
    }

    sound(): void {
        console.log("dog bark")
    }
}

let d = new Dog("orio", "white")
console.log(d.aname)
console.log(d.color)
d.sound()