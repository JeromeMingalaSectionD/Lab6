//Task 1

//Declaring a variable and making it the value of 10
let myNumber = 10;

//Declaring a variable and making it a string value saying Hello Javascript!
let myString = "Hello Javascript!";

//Printing both variables in the console
console.log(`${myNumber} ${myString}`);

//Task 2

//For loop that gets the numbers from 0 to 10 the prints it
for (let number = 0; number <= 10; number++) {
    console.log(number);
}

//For loop that calculates the first 5 mutiples of 3 then prints it
for(let mutiply = 1; mutiply<=5; mutiply++) {
    let multiple = 3 * mutiply;
    console.log(multiple);
}

//Task 3

//Making a function that will add 2 numbers
function addNumbers (num1, num2) {
    return num1 + num2;
}

//Variable that defines the 2 numbers then prints the result
let addedNumbers = addNumbers(3, 13);
console.log(addedNumbers);

//Making a function that will mutiply 2 numbers
function mutiplyNumbers (num1, num2) {
    return num1 * num2;
}

//Varible that defines 2 numbers then prints the result
let mutipliedNumbers = mutiplyNumbers(5, 4);
console.log(mutipliedNumbers);