import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../lib/prisma"
import { nanoid } from "nanoid"

export const createMember = async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === "POST") {
        
        const unique_id = nanoid()
        const { id, name, age, sex_cd } = req.body

        try {

            const newMember = await prisma.member.create({
                data: { seq: unique_id, id, name, age: age || null, sex_cd }
            })
            res.status(201).json(newMember)
        }catch(err) {

            console.error(`Error creating member: ${err}`)
            res.status(500).json({ err: `Failed to create member` })
        }
    }else {
        res.status(405).json({ message: `Method not allowed` })
    }
}

// export const getMembers = async (req: NextApiRequest, res: NextApiResponse) {
    
// }

// export const updateMember = async (req: NextApiRequest, res: NextApiResponse) {
    
// }

// export const deleteMember = async (req: NextApiRequest, res: NextApiResponse) {
    
// }