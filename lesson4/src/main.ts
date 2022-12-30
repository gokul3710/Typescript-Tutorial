//type aliases

type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[]

let a: stringOrNumberArray = [21321,"12312"]

type Address  = {
    name: string,
    place: string,
    district: string,
    state: string,
    country: "India",
    pin: number
    hello?: Function
}


//literal types

let myName: "Gokul"

let USERNAME: "Gokul" | "Krishna" | number

USERNAME = 123

//functions


const add: mathFunction = (a,b)=>{
    return a+b
}

const accept=(message: any)=>{
    console.log(...message);
}

let subtract:mathFunction = function(a , b){
    return a-b
}

accept([add(2,8),subtract(5235,43)])


type mathFunction = (a:number,b:number,c?: number )=> number
    

//rest parameters


const total = (a: number,...nums: number[]): number=>{
    return nums.reduce((prev,curr)=> prev+curr)
}

accept([total(24,32,5,466,32,52,5,2)])


//never type

const error = (errmsg: string)=>{
 throw new Error(errmsg)
}

const infinite =()=>{
    let i:number = 1
    while(true){
        i++
        if(i>100) break;
    }
}