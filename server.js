const http = require("http");

//creating server
const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(3000, console.log(`server listening on port 3000`));
