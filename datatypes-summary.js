// # primitive
// 7 types : string,number,boolean,null,undefined,symbol(unique value),big int

const score =  100
const scoreValue = 100.3

const isLoggedIn= false
const outsideatemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId);

const bignumber = 263548753375n


//# refrence (non promitive)
// array, objects,functions

const heros = ["thor","ironman","natasha"]

let muObj = {
    name: "snehal",
    age : 22
}

const myFunction = function (){
    console.log("hello world");
}

console.log(typeof myFunction);
