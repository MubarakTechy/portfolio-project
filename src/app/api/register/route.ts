import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db"
import bcrypt from 'bcryptjs';


export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();
        const { username, email, password } = payload;

        if (!username) {
            return NextResponse.json({ messsage: "username is required" }, { status: 400 })
        } else if (!email) {
            return NextResponse.json({ messsage: "email is required" }, { status: 400 })
        } else if (!password) {
            return NextResponse.json({ messsage: "password is required" }, { status: 400 })
        }
        //mongo db start here
        const usernameExist = await db.user.findFirst({
            where: {
                username
            }
        })
        const emailExist = await db.user.findFirst({
            where: {
                email
            }
        })

        if (usernameExist) {
            return NextResponse.json({ messsage: "User with this username already exist" }, { status: 400 })
        } else if (emailExist) {
            return NextResponse.json({ messsage: "User with this email already exist" }, { status: 400 })
        }

        //bcrpt and  Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const createNewUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });

        if (createNewUser) {
            return NextResponse.json({ message: "Registeration successfull" }, { status: 201 })
        } else {
            return NextResponse.json({ message: "Registeration failed" }, { status: 400 })
        }

    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "internal server error" }, { status: 500 })
    }

}