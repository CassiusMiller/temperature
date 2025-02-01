
console.log("test");


/*for( let i = 2; i < 21; i += 2 ){
    document.write(`<p>${i}</p>`)
}*/

/*function test() {
    let num1 = prompt("enter number")
    num2 = 0
    for( let i = 0; i < 11; i++ ){
        num2 = num1*1
        document.write(`<p> ${num1} x ${i} = ${num2} </p>`)
    }
}*/
function challenge() {
    for( let i = 1; i <=100; i++){
        console.log(i);
        if(i==50){
            console.log("ifound it");
        }else{
        console.log(i);
        }
    }
}


function multTable(){
    // get the num from the prompt
    let num = Number(prompt("Enter the number"));
    let result =0;
    document.write(`<h3> Table of ${num} </h3>`)
    //loop
    for(let i=0;i<=10;i++){
        //display the result (template string)
        result = num*i;
        document.write(`<li> ${num} x ${i} = ${result} </li>`);
    }
}

//challenge 2: 
// 1. create the function challenge()
// 2. display the numbers from 1 to 100. (loop)
// 3. display " I found it " instead of the number 50. (if==50)

function challenge(){
    for(let i=1;i<=100;i++){
        if(i==50){ // Are you the 50?
            //true
            console.log("I found it!");
        }else{
            //false
            console.log(i);
        }

    }
}

//Arrays
let myArray = [3,2,4,5,0];
let myArray2 = ["Samantha",true,10.6,7];

console.log(myArray[3]);//5
console.table(myArray2);

myArray2[0] = "James";
console.table(myArray2);

let students = ["Ed","Joseph","Gabriel","Robert","Roland","Justin","Kyle","Koiree","James","Cassius"];
let ages = [31,26,25,28,29,30,31,28,32,33];


for(let i=0;i<students.length;i++){
    document.getElementById("studentList").innerHTML+=`
    <div class="student">  
        <p>${students[i]} </p>
        <p>${ages[i]}  </p>
    </div>
    `;
}

