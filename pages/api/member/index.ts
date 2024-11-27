// member POST, GET 요청 처리하는 API 문서

import { NextApiRequest, NextApiResponse } from "next"
import createMember from "../../../controllers/member/create"

export default async function handler(req: NextApiRequest, res:NextApiResponse) {

    if(req.method === "POST") {

        return await createMember(req, res)
    }else {
        
        res.status(405).json({ error: `Method not allowed` })
    }
}