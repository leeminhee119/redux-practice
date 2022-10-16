// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  count: number,
  totalSales: number
}
const fs = require('fs');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let currentState = await fs.readFile('./currentState.json')
  console.log('file opened')
  if (req.method === "POST") {
    fs.writeFileSync('./currentState.json', JSON.stringify({
      count: currentState.count + 1,
      totalSales: currentState.totalSales + req.body.addSales
    }))
  }
  currentState = JSON.parse(currentState.replace(/\r?\n|\r/g, ''))
  res.status(200).json(currentState)
}
