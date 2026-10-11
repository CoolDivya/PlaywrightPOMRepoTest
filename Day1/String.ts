// let st1:string ="divyata"
// let str2:string = 'saya'
// let str3:string = `rohan`

// //string methods
 let str:string = "Hello Typescript"

// //1. lenth
// console.log(str.length)

// //2. toUpperCase() and toLowerCase()
// console.log(str.toUpperCase())  // HELLO TYPESCRIPT
// console.log(str.toLowerCase())  //hello typescript

// //3. charAt(index) : it will return character based on index  
// //indexOf(string): it will return index based on character

// console.log(str.charAt(2))  // l
// console.log(str.indexOf('script'))  //10

// // 4. substring(start_index, end_index):
// console.log(str.substring(2,14))   // llo Typescri

// // 5. includes(string) : it check provided string and retrun true or false
// console.log(str.includes("abc"))  //false
// console.log(str.includes("Ty"))   //true
// console.log(str.includes("ty"))   //false string is case sensitive

// //6. startsWith() - return true or false
// //7: endsWith() -return true or false

// console.log(str.startsWith("H"))  //true
// console.log(str.startsWith("t"))  //false
// console.log(str.startsWith("Hello"))  //true
// console.log(str.endsWith("H"))  //false
// console.log(str.endsWith("t")) //true


// // replace(old str, new str) : we can replace string 
// console.log(str.replace("Hello","t"))  //t Typescript

// //8. split() : it will split the string into multiple parts based on the delimter and returns an array

// let words:string[] = str.split(" ")
// console.log(words)  //[ 'Hello', 'Typescript' ]

// let mystring:string = "abc@gmail.com,xyzabc" //delimeter is ,
// let mystring2:string[]=mystring.split(",")
// console.log(mystring2[0])  //abc@gmail.com


// //9. trim():remove spaces at string start and end
// // , trimStart(): remove spaces at start, 
// // trimend(): remove spaces at end


// let mystring:string= "   test space for string    "

// console.log("original string",mystring)
// console.log("new string",mystring.trim())
// console.log("new string",mystring.trimStart(),"end")

// /* o/p:
// original string    test space for string    
// new string test space for string
// new string test space for string     end
// */


// //concat() : it will join string , also we can use '+' operator
// let str1:string = "divya"
// let str2:string ="devalekar"
// let str3 = str1.concat(str2)
// console.log(str3)
// console.log("I am ".concat(str3))

// //concept of string immutability

// let num = 10
// let res = num+5
// console.log(res)
// console.log(num)

// // So here original value of num is not changing this immutable
// //string also same if perform any methods on string then original will not change
// // so string is immutable

// let str1:string = "divya"

// let newstr=str1.concat("typescript")

// console.log(str1)
// console.log(newstr)
// // so here it is not changing original value of variable this immutabilty 