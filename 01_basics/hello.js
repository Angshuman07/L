console.log("Hello")
console.log("HII")

//variables

console.log('Hey');

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//Data-Types

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 +3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


// Data Types

//Primitive (Number,Strig,Bool,Null,undefined,BigInt) 
//Reference (Non-primitive) (Arrays,Objects,Functions)

//typeof null is object

//Stack(primitive) Heap(Reference)

//Math 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)

var arr1 = [1,2,3]
var arr2 = [4,5,6]

var arr = [...arr1,...arr2]

console.log(arr)