// Assignment Code
//Create arrays for password content: Uppercase, lowercase, numbers, special characters
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = [' ', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', ',', '-', '.', '/', ':', ';', '<', '?', '[', ']', '\'', '_', '|', '{', '}', '"', "'"]
var lowercase = []

for (var i= 0; i < uppercase.length; i++){
  lowercase.push(uppercase[i].toLowerCase());
}

var selectUpper = confirm("Do you want your password to contain uppercase letters?")
var selectLower = confirm("Do you want your password to contain lowercase letters?")
var selectNumber = confirm("Do you want your password to contain numbers?")
var selectSpecial = confirm("Do you want your password to contain special characters?")

var combination = []

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

var randompassword = []

var length = prompt("Choose a password length between 8 and 36 characters:")

for (var b= 0; b < parseInt(length); b++){
  var passwordcombo = Math.floor(Math.random()*combination.length)
  randompassword.push(combination[passwordcombo])
}

console.log(randompassword)



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
