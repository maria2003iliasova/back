import prisma from '../../lib/prisma'
import schema, {joiSchema} from './signup.spec/signup.schema'
import bcrypt from "bcrypt"
import sendMail from '../../mailer/nodemailer'
export const swPostSignup = {
    "summary": "Create the new user",
    "tags": [
        "signup"
    ],
    "requestBody": {
        "content": {
            "application/json": {
                "schema": {
                    ...schema
                }
            }
        }
    },
    "responses": {
        "200": {
            "description": "User created"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    try {
        await joiSchema.validateAsync(req.body)
        console.log(req.body)
        const candidate = await prisma.user.findUnique({
            where: {
                login: req.body.login
            }
        })
        if (candidate) return res.send({error: "Логин занят"})
        const hashPassword = await bcrypt.hash(req.body.password, 5);
        const mail = await sendMail(req.body.email);
        console.log(hashPassword)
        const user = await prisma.user.create({
            data: {
                ...req.body,
                password: hashPassword,
                email: mail
            }
        }).catch(console.error)
        res.send(user ? user : {error: "Somethig went wrong"})
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}