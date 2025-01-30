
function convert() {
    let pre = prompt("converting Fahrenheit enter 1. Converting Celsius enter 2");
    let num1 = prompt("Enter temperature");
    let deg;
    let p = document.getElementById("result");
    let num2;
    if(pre == 1){
        deg = "Celsius";
        num2 = (num1 * 9/5) + 32;
        
    }else if(pre == 2){
        deg = "Fahrenheit";
        num2 = (num1 - 32) * 5/9;
        
    }else{
        alert("envalded response try agian");
    }
    p.innerHTML=(`The conversion of ${num1} to ${deg} is ${num2}`)
}