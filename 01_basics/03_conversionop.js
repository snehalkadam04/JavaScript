let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) //declation of type
console.log(typeof valueInNumber);
console.log(valueInNumber);

//if we wrire null insted of 331bc the output will 0
//if we write undefined insted of 33abc the output will NaN(not a number)
//if we wrire true/false insted of 33abc the output will 1/0
//if we wrire string insted of 331bc the output will NaN


let isLoggedIn ="snehal k"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

//1 = true, 0 = false
//"" = false
//"hitesh"= true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*******************************Operation********************

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);

let str1 = "snehal"
let str2 = "kadam"

let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log(1+2+"2");

console.log(1+2*3);

//le num1 ,num2,num3//
//num1 =t num2 = num3 = 2+2//

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
//++ add one //output = 101

//prefix and postfix JS,mdn