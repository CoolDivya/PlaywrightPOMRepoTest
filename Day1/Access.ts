// Access modifiers: public, protected, private
// it defines scope of properties and methods

//public : accessible anywhere in same project
//protected : accessible within the class and inside the child class
//private : access within only in same class not in subclass or child class

// if no any access specifier defined then everthing is public

class Person
{
    public name:string
    protected age:number
    private ssn:number

    constructor(name:string, age:number, ssn:number)
    {
        this.name = name
        this.age = age
        this.ssn = ssn
    }

    displayInfor()
    {
        console.log("name:",this.name,"Age:",this.age,"ssn:",this.ssn)
    }
}


class Employee extends Person
{
    private empId:number

    
    constructor(name:string, age:number,  empId:number)
    {
        super(name, age)
        this.empId = empId
    }

    //"ssn:",this.ssn : we cant access ssn as it is private accessible in same class
    showEmpDetails()
    {
         console.log("name:",this.name,"Age:",this.age,"Emp ID:",this.empId)
    }
}

let emp=new Employee("divyata",34,2418706,27)

emp.displayInfor()  //name: divyata Age: 34 ssn: 2418706
emp.showEmpDetails()  //name: divyata Age: 34 Emp ID: 27