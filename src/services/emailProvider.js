var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, sendTo, content) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: [sendTo, "vitorvaske6@gmail.com"],
    subject: subject,
    text: content,
  };
  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return false
        } else {
          return true
        }
      });
    });
    return true
  } catch (err) {
    // //console.log(err)
    return false
  }
}