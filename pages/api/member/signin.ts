// /api/member/signin.ts → 로그인 (JWT 발급)

import { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET || "1100110"

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "POST") {

        const { id, pw } = req.body

        
    }
}