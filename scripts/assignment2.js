function convert() {
    num1 = prompt("Enter temperature")
    let num2 = (num1 * 9/5)+32
    console.log(`The conversion of ${num1} to Fahrenheit is ${num2}`);
    document.write(`The conversion of ${num1} to Fahrenheit is ${num2}`)
}