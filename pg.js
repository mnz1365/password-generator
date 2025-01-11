var readsync = require('readline-sync');
let passwordLength = 0;
let specialCharacters = 0;
let numbers = 0;
let passwordToString = "";
let password = [];
let randomNumber = Math.floor(Math.random() * 10);
const lowerCaseUpperCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const selectedSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


passwordLength = parseInt(readsync.question("enter your password length: "));
specialCharacters = parseInt(readsync.question("enter your special characters needs: "));
numbers = parseInt(readsync.question("enter your numbers needed: "));

for(i=0;i<specialCharacters;i++){
    password.push(selectedSpecialCharacters[ Math.floor(Math.random() * (selectedSpecialCharacters.length-1))]);
}
for(i=0;i<numbers;i++){
    password.push(numbersZeroToNine[Math.floor(Math.random() * (numbersZeroToNine.length-1))]);
    
}

numbers = passwordLength;
passwordLength = passwordLength - password.length;

for(i=0;i<passwordLength;i++){
    password.push(lowerCaseUpperCaseLetters[ Math.floor(Math.random() * (lowerCaseUpperCaseLetters.length-1))])
}
for(i=0;i<numbers;i++){
    passwordToString += password[i];
}

console.log(passwordToString);