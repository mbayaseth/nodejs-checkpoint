const fs = require("fs");

//file system to create a file named "welcome.txt" containing one line "Hello Node".

fs.writeFileSync("welcome.txt", "Hello Node", "utf-8");

//program that reads and console.log data from welcome.txt
fs.readFile("welcome.txt", "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
