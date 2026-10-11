// // Different ways to create object in JS/TS
// // 1. using object type : for both JS and ts
// //2. using type object : for only TS
// //3. using type aliased : both TS/JS
// //4. Using classes : (JS ES16/TS)

// // using Object type create object:
// //Typescript 'objects' represents all values that are not in premitive types. Object represent non-primitive.

// let employee:object ={
//     name:"John", 
//     age:30, 
//     salary:50000}

// //employee is object,name,age, salary - propeeties with values

// //if we want to use method then use below


// let employee = {
//   name: "John",
//   age: 30,
//   salary: 50000,
//   getDetails:function() {
//     return this.name
//   }
// }

// // console.log(typeof(employee))  //=> object

// //Accessing object (using .notation)
// console.log(employee.name) // John
// console.log(employee.getDetails())   // John

// //using braket annotation 

// console.log(employee["age"])
// console.log(employee["getDetails"]())

// //modify the value
// employee.name ="divya"
// console.log(employee.name) 

// employee["age"] = 34
// console.log(employee.age) 

// //2. Inline type object : we also define datatype of keys
// // first declaration and then assigning data
// let student:{
//   name:string,
//   age:number,
//   grade:string,
//   getSummary():string
// } =
// {
//   name:"divya",
//   age:35,
//   grade:"A",
//   getSummary():string 
//   {
//     return this.name
//   }
// }



// console.log(student.getSummary())

// //3. using type alliases: create structure only one time and resuse it. allows new name for
// // existing type. only supported in TS.

// //create structure

// type Product={
//   pname:string,
//   price:number,
//   getInfo():string
// }

// let book1:Product= 
// {
//     pname:"divyata",
//     price:200,
//     getInfo():string
//     {
//        return `${this.pname}`
//     }
 
// }

// let book2:Product= 
// {
//     pname:"rohan",
//     price:200,
//     getInfo():string
//     {
//        return `${this.pname}`
//     }
 
// }

// console.log(book1.getInfo())
// console.log(book2.getInfo())

// //Intersection types:



// type Personal={
//   pname:string,
//   age:number
 
// }

// type contact ={
//   email:string,
//   phone:number
// }

// //combine 2 type to use in one object
// type candidate=Personal & contact &
// {
//    getContactInfo():string;
// }

// let employee:candidate=
// {
//     pname:"divyata",
//     age:34,
//     email:"divya@test.com",
//     phone:8999667723,
//     getContactInfo():string
//     {
//       return `${this.pname}, ${this.age}`
//     }

// }

// console.log(employee.getContactInfo())



//4. using class : class it is a blueprint. it contains variables and methods.
// with class we can create multiple objects.

class Person{

  ssn:string;
  firstname:string;

  // assign data to class variables in constructor
  constructor(ssn:string,firstname:string)
  {
    this.ssn=ssn;
    this.firstname=firstname;
  }

  //constructor will never return any value, they invoked at time of object creation
  //constructor is only for assigning data to variables

  getFirstname():string
  {
    return `${this.firstname}`
  }

}

// To create object P1 for class Person use new keyword. it will create new object for Person class.


let P1= new Person("test","divyata")
let P2= new Person("abc","rohan")
console.log(P1.getFirstname())
console.log(P2.getFirstname())