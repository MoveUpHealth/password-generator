// Assignment Code
//Create arrays for password content: Uppercase, lowercase, numbers, special characters
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = [' ', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', ',', '-', '.', '/', ':', ';', '<', '?', '[', ']', '\'', '_', '|', '{', '}', '"', "'"]
var lowercase = []

for (var i= 0; i < uppercase.length; i++){
  lowercase.push(uppercase[i].toLowerCase());
}

var combination = []

for (var x= 0; x < uppercase.length; x++){
  combination.push(uppercase[x]);
}
for (var y= 0; y < number.length; y++){
  combination.push(number[y]);
}
for (var z= 0; z < special.length; z++){
  combination.push(special[z]);
}
for (var a= 0; a < lowercase.length; a++){
  combination.push(lowercase[a]);
}

console.log(combination)

for (var b= 0; b < 10; b++){
  var passwordcombo = Math.floor(Math.random()*combination.length)
  console.log(combination[passwordcombo])
}

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
