var age = 28;
console.log(age);
console.log(typeof age);

var bool = true;
console.log(bool);
console.log(typeof bool);


/// var, update and re-declare 
age = 29;
console.log(age);

var age = 30; //declare
console.log(age);

//scope
if (age> 10) {
    console.log("old");
    var buyAlchol = true;
    console.log(buyAlchol);
};

console.log(buyAlchol);


//function
function add() {
    var one = 1;
    console.log(one);
};
add ();

// console.log(one); //Error

// LET, update
let myName = "sooyong"
console.log(myName);
myName = "sooyyy";
console.log(myName);

if (true) {
    let myAge = 31; 
    console.log(myAge);
}

// console.log(myAge);

function myFunction() {
    let myFunc = 10;
    console.log(myFunc);
}

myFunction();
// console.log(myFunc); //Error

//CONST
const yourName = "sooyong";
//const yourName = "soooyyy"; Error

class myInfo = {
    name: "sooyong",
    age: 30,
 };

 console.log(myInfo.age);

 myInfo.age = 30;
 console.log.apply(my
