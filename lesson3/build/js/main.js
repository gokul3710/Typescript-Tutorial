"use strict";
console.log(2);
let stringArr = ["one", "hey", "Gokul", 4124, [934, "#@423", [214, "24124"]]];
let guitars = ["strat", "Les Paul", 474];
let mixedData = ["dslhf", "353", 34975, true];
stringArr[0] = 765;
stringArr.push("123");
console.log(stringArr);
//tuple
let mytuple = ["wq", 3214, true];
let array = ["john", 34324];
let b = mytuple;
// b[0]= 3425
console.log(b);
let obj = { mytuple };
console.log(obj);
let myAddress = {
    name: "Hi",
    place: "kochi",
    district: "ekm",
    state: "kerala",
    pin: 688561,
    country: "India"
};
console.log(myAddress);
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["A"] = 4] = "A";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["C"] = 6] = "C";
    Grade[Grade["D"] = 7] = "D";
})(Grade || (Grade = {}));
console.log(Grade.B);
