//Inheritance: Parent and child relation
//usability concept
//a class can use properties and methods of another class
//it is a mechanism where one classs (child) can inherit properties and methods of parent class


//Method overriding:
// subclass/child class provides specific implemetation of amethod that is already defined in
//super class
//The method must have same name, return type and parameters.
class Car
{
    name:string
    color:string
    model:string

    constructor(name:string, color:string, model:string)
    {
        this.name = name
        this.color = color
        this.model = model
    }

    start()
    {
        console.log("car start")
    }

    stop()
    {
        console.log("car stop")
    }

    displayInfo()
    {
        console.log("name: ",this.name, "Color: ", this.color, "model: ",this.model)
    }
}

//child class
class Honda extends Car
{
    year:number

    //constructor available in parent class so there is conflict so we need to handle
    //to pass parent class properties to child class constructor and we need to pass super

    constructor(name:string, color:string, model:string, year:number)
    {
        super(name,color,model)
        this.year = year
    }

    //parent class also have start method implementation is different but name is same 
    //this method overriding
    start()
    {
        console.log("Honda started")
    }

    yom()
    {
        console.log("name: ",this.name, "Color: ", this.color, "model: ",this.model)
        console.log(this.year)
    }
}

class Maruti extends Car
{
    year:number

    constructor(name:string, color:string, model:string, year:number)
    {
        super(name,color,model)
        this.year = year
    }

    start()
    {
        console.log("Honda started")
    }

    yom()
    {
        console.log("name: ",this.name, "Color: ", this.color, "model: ",this.model)
        console.log(this.year)
    }
}

// let honda = new Honda("Honda","white","ato",2025)
// console.log(honda.name)
// console.log(honda.model)
// console.log(honda.color)
// console.log(honda.year)
// honda.start()
// honda.displayInfo()

// let maruti = new Maruti("Maruti","Grey","manual",2026)
// console.log(honda.name)
// console.log(honda.model)
// console.log(honda.color)
// console.log(honda.year)
// maruti.yom()


// create object of Parent class type Car, provide variable type for creating object
//Parent class variable is holding child class object by using this we cant access child class
//properties and methods
//only we can access properties and methods avaialbale in both

// let car:Car = new Honda("Honda","white","ato",2025)
// car.displayInfo()
// car.start()  //it will give o/p for child method it is overrided method
// console.log(car.name)
// console.log(car.model)
// console.log(car.color)
// //console.log(car.year) // cant access


//Super() : method used to invoked parent class constructor like above

// super keyword: used to invoked immediate parent class method
//by using super we cant get value of parent class variable and it is possible in java

class Parent
{
    num:number=10

    constructor()
    {
        console.log("parent class constructor")
    }

    display()
    {
        console.log("Parent class display method")
    }

}

class Child extends Parent
{
    num:number=20  //overriden

    constructor()
    {
        super()  //aslways invoked parent class constructor in child class
        console.log("child class constructor")
    }

    show()
    {
        console.log(this.num) //20
        console.log("child claas show method") //child claas show method
    }

    //overridden method
    display()
    {
        super.display()  // by super we can invoked parent class display method -> Parent class display method
        console.log("Child class display method")  //-> Child class display method
    }


}

let demo1=new Child()  // parent class constructor, child class constructor
demo1.show()
demo1.display()