import { NextApiRequest, NextApiResponse } from "next"
import {
    createMember,
    // getMembers,
    // updateMember,
    // deleteMember,
} from "../../controllers/member/memberController"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
            return await createMember(req, res)
        // case "GET":
        //     return await getMembers(req, res)
        // case "PUT":
        //     return await updateMember(req, res)
        // case "DELETE":
        //     return await deleteMember(req, res)
        default:
            return res.status(405).json({ error: "Method not allowed" })
    }
}