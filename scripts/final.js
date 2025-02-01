
function convert(){
    let start = prompt("Enter the starting temperature:");
    let end = prompt("Enter the ending temperature:");
    let scale = prompt("Enter the scale ('C' for Celsius to Fahrenheit or 'F' for Fahrenheit to Celsius):");
    let p = document.getElementById("result");
    let convertedTemp;
    
    for (let i = start; i <= end; i++) {
        if (scale == "C") {
            convertedTemp = (i * 9/5) + 32; 
            p.innerHTML=(`${i}Celsius is ${convertedTemp}Fahrenheit`);
        }else if (scale == "F") {
            convertedTemp = (i - 32) * 5/9;
            p.innerHTML=(`${i}Fahrenheit is ${convertedTemp}Celsius`);
        } else {
            p.innerHTML=("Invalid scale. Please use 'C' for Celsius to Fahrenheit or 'F' for Fahrenheit to Celsius):");
        }
    }
}