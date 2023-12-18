var generator = require("generate-password");

//function to generate random password
var password = generator.generate({
  length: 10,
  numbers: true,
});


console.log(password);