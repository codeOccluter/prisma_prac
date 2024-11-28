import { prisma } from "../../lib/prisma"
import bcrypt from "bcrypt"

export const signinService = async (id: string, pw: string) => {

    const member = await prisma.member.findUnique({ where: { id } })
    if(!member) {
        throw new Error("Member not found")
    }

    const isPwValid = await bcrypt.compare(pw, member.pw)
    if(!isPwValid) {
        throw new Error("Invalid credentials")
    }

    return {
        seq: member.seq,
        id: member.id,
        name: member.name,
        age: member.age,
        created_date: member.createdDate,
        updated_date: member.updatedDate,
        sex_cd: member.sex_cd
    }

}