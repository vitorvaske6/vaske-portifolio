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
  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        //console.log(error, info)
        return false
      } else {
        //console.log("Email Sent");
        return true
      }
    });
    return true
  } catch (err) {
    // //console.log(err)
    return false
  }
}