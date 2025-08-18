import * as nodemailer from 'nodemailer'

//-----------------------------------------------------------------------------
export default async function sendMail(
  subject: string,
  sendTo: string,
  content: string
): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.MAIL_USER,
    to: 'vitorvaske6@gmail.com',
    cc: sendTo,
    subject: subject,
    text: content,
  }
  try {
    await transporter.sendMail(mailOptions)
    return true
  } catch (err) {
    // //console.log(err)
    return false
  }
}
