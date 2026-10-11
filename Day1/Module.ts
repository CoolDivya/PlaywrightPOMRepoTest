export let appname="calculator"

export function add(a:number,b:number):number{
    return a+b
}

export class Formatter{
    static toUpper(str:string):string{
        return str.toUpperCase()
    }
}