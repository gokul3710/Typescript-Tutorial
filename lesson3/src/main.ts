console.log(2);

let stringArr  = ["one","hey","Gokul",4124,[934,"#@423",[214,"24124"]]]

let guitars = ["strat", "Les Paul",474]

let mixedData = ["dslhf","353",34975,true]

stringArr[0] = 765;
stringArr.push("123")
console.log(stringArr);

//tuple

let mytuple: [string,number,boolean] = ["wq",3214,true]

let array: ["john",number] = ["john",34324]

let b = mytuple;

// b[0]= 3425
console.log(b);

let obj = {mytuple}
console.log(obj);

type Address  = {
    name: string,
    place: string,
    district: string,
    state: string,
    country: "India",
    pin: number
    hello?: Function
}

let myAddress: Address = {
    name: "Hi",
    place: "kochi",
    district: "ekm",
    state: "kerala",
    pin: 688561,
    country: "India"
}

console.log(myAddress);

enum Grade {
    U,
    A = 4,
    B,
    C,
    D
}

console.log(Grade.B);




