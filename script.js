// Assignment Code
//Create arrays for password content: Uppercase, lowercase, numbers, special characters
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = [' ', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', ',', '-', '.', '/', ':', ';', '<', '?', '[', ']', '\'', '_', '|', '{', '}', '"', "'"]
var lowercase = []
var combination = []
var randompassword = []

for (var i= 0; i < uppercase.length; i++){
  lowercase.push(uppercase[i].toLowerCase());
}

function generatePassword(){
var selectUpper = confirm("Do you want your password to contain uppercase letters?")
var selectLower = confirm("Do you want your password to contain lowercase letters?")
var selectNumber = confirm("Do you want your password to contain numbers?")
var selectSpecial = confirm("Do you want your password to contain special characters?")



if (selectUpper) { for (var x= 0; x < uppercase.length; x++){
  combination.push(uppercase[x]);
}}
if (selectLower) {for (var a= 0; a < lowercase.length; a++){
  combination.push(lowercase[a]);
}}
if (selectNumber) {for (var y= 0; y < number.length; y++){
  combination.push(number[y]);
}}
if (selectSpecial) {for (var z= 0; z < special.length; z++){
  combination.push(special[z]);
}}

console.log(combination)





function lengthFunction(){ do{
  var length = prompt("Choose a password length between 8 and 36 characters:")
  if ((parseInt(length) >= 8) && (parseInt(length) <= 36)){
    return length
  
  } else {
    alert("Your number selection is invalid. Please try again")
    
}}
while ((parseInt(length) < 8) || (parseInt(length) > 36) ) }



var passwordLength = lengthFunction()


for (var b= 0; b < parseInt(passwordLength); b++){
  var passwordcombo = Math.floor(Math.random()*combination.length)
  randompassword.push(combination[passwordcombo])
}

console.log(randompassword)
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randompassword.join('');
  console.log(password)
  console.log(randompassword)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
