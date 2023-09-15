var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, sendTo, content) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.MAIL_USER,
    to: [sendTo, "vitorvaske6@gmail.com"],
    subject: subject,
    text: content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return false
    } else {
      console.log("Email Sent");
      return true
    }
  });
  return true
}