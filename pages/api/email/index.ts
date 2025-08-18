import sendMail from '@/services/emailProvider'
import { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function POST(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const email: { subject: string; sendTo: string; content: string } = await req.body

  if (!email || !email.subject || !email.sendTo || !email.content)
    return res.status(400).json({ message: 'E-mail was not sent successfully please try again.' })

  const result = await sendMail(email.subject, email.sendTo, email.content)

  if (result) {
    return res.status(200).json({ message: 'E-mail sent successfully' })
  }

  return res.status(500).json({ message: 'E-mail was not sent successfully please try again.' })
}
