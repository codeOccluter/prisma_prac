import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../lib/prisma"
import { nanoid } from "nanoid"

const createMember = async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === "POST") {

        const unique_id = nanoid()
        const { id, name, age, sex_cd } = req.body

        try {
            const newMember = await prisma.member.create({
                data: { 
                    seq: unique_id,
                    id,
                    name,
                    age: age || null,
                    sex_cd
                 }
            })
            res.status(201).json(newMember)
        }catch(err) {
            console.error(`Error createMember: ${err} `)
            res.status(500).json({ err: `Failed create member(INSERT)` })
        }
    }else {
        res.status(405).json({ message: `Method(POST) not allowd` })
    }
}

export default createMember