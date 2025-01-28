console.log("conditionals");

// if-statement
// if(condition){ //y/n questions
//code to be exicuted if the condition is true
//}

if(3,5){
    console.log(`this is true`);
    
}

let isTrue = false

if(isTrue){
    console.log(`yes`);
    
}else{
    console.log(`no`);
}

let num1 = 30

if(num1>=21){
    console.log(`You are an Adult`);
}else{
    console.log(`You are underage`);
    
}


if(num1<13){
    console.log(`you are a child`);   
}else if(num1<21){
    console.log(`you are a teenager`);
}else if(num1<65){
    console.log(`you are an adult`);
}else{
    console.log(`you are a senior`);
}

let age1=prompt(`Enter age`)

if(age1<12){
    console.log(`ticket cost $5`);
    
}else if(age1<18){
    console.log(`ticket cost $8`);
    
}else{
    console.log(`tickets cost $10`);
    
}

function ticketCalculator(){
    //your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    return "Your ticket price is: $" + price;
}


function clothingTemp(){
    let temp = prompt("Enter the temp");
    let outfit
    let p = document.getElementById("weather")
    p.classList.remove("chill", "hot", "cold")
    if(temp<12){
        p.classList.add("chill");
        outfit = `wear a jacket`;
        
    }else if(temp<18){
        p.classList.add("cold");
        outfit = `wear a sweater`;
        
    }else{
        p.classList.add("hot");
        outfit =`wear a t-shirt`
        }
    p.innerHTML=`you should ${outfit}`
}