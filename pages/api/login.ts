// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean,
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = req.body
  if (email === 'admin@hermes.com' && password === 'admin') {
    res.status(200).json({ success: true, message: 'Login successful' })
  }
  else {
    res.status(401).json({ success: false, message: 'Invalid credentials' })
  }
}
