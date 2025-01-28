console.log("functions.js file");

let name = "Mike";
let Lname = "Jordan"
console.log("Hello " + name + ", welcome to the JavaScript world!");

//`````` and ${} is used to replace + 
console.log(`Hello ${name} ${Lname} welcome to the JavaScript world`);


//Function declaration
function sayHello() {
    console.log(`Hello cohort 55`);
    
}
// call Function
sayHello();
sayHello();


//example2 with parameter
function greet(name) {
    console.log(`Hello ${name}, welcome!`);
    
}
greet("Clay");
greet("Jeff");




//example3 with 2 parameter
const year = 2025
function greet2(name1, name2) {
    console.log(`Hello ${name1}, ${name2} welcome to your ${year} JS course!`);

}
greet2("Clay", "Jeff");
greet2("Larry", "eddie");



//example4 with prompt
function sayMyName() {
    let name = prompt("What is your Name?")
    let age = prompt("What is your age?")
    console.log(`Your name is ${name} and you are ${age}`);
    
}
sayMyName();

//example5 with numbers
//by adding a =0 that just give it a defualt 
function add(num1=0, num2=0){
    console.log(`The addition between ${num1} and ${num2} = ${num1 + num2}`);
    document.write(`The addition between ${num1} and ${num2} = ${num1 + num2}<br>`);//<br> html tac to seperate each one on the browser screen
}
add(123 , 213);
add(12.34 , 3456.5);
add(1234234.5 , 45.1234);
add(12 ,)
add();


/*
Challenge 3: Double the Number
Task:
Create a function called doubleNumber that takes one number as a parameter.
The function should return the number multiplied by 2.
Print the result when you call the function with different numbers. */

function doubleNumber(num=3) {
    console.log(`${num} times 2 =${num * 2}`);
    document.write(`${num} times 2 =${num * 2} <br>`);
}
doubleNumber(12);
doubleNumber(3);

/*Challenge 4: Combine Names
Task:
Create a function called combineNames that takes two parameters: firstName and lastName .
The function should return the full name in the format: "firstName lastName" .
If either parameter is missing, it should use the default value "Unknown" for that parameter.*/
function combineNames(firstName="unknown", lastName="unknown") {
    console.log(`${firstName}, ${lastName}`);
    document.write(`${firstName}, ${lastName}<div>`)
}
combineNames("Cassius", "Clay");



// button click event
function login() {
    alert(`you have logged in!`)
    console.log(`executin login function`);
    
}

