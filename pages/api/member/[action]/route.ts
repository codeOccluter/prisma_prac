// [동적 슬러그] - API 라우트 처리

import { NextRequest, NextResponse } from "next/server"
import { signinService } from "../../../../services/member/signin"

export async function POST(req: NextRequest, { params }: { params: { action: string } }) {

    const { action } = params

    try {

        const body = await req.json()

        if(action === "signin") {

            const { email, password } = body

            if(!email || !password) {
                return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
            }
        }
    }catch(err) {
        
    }
}