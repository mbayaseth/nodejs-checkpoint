var nodemailer = require("nodemailer");

//function to send email
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ".................@gmail.com",
    pass: "**********************",
  },
});

var mailOptions = {
  from: "..............@gmail.com",
  to: "..............@airforce.mil.ng",
  subject: "Sending Email using Node.js",
  text: "I am currently trying out mail sending in Node!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
