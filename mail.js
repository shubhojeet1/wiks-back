const nodemailer = require("nodemailer");

function mail(name, email, message) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "coderoofitsolutions@gmail.com",
      pass: "moczjgdjurjhgfqr",
    },
  });

  let mailOptions = {
    from: "coderoofitsolutions@gmail.com",
    to: "coderoofitsolutions@gmail.com",
    subject: "Message Received",
    text: `Name: ${name}, Email: ${email}, Message: ${message} are received.`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Email has been sent", info.response);
    }
  });
}

module.exports = mail;
