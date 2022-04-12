import prisma from '../../lib/prisma'
import schema, {joiSchema} from './signin.spec/signin.schema'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export const swPostSignin = {
    "summary": "Sign in",
    "tags": [
        "signin"
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
            "description": "User sign in"
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
        const user = await prisma.user.findUnique({
            where: {
                login: req.body.login
            }
        })
        const passwordMatch = await bcrypt.compare (req.body.password, user.password)
        if (!passwordMatch) return res.status(400).json({
            error: "Пароль не совпадает"
        })
        const token = jwt.sign({
            id: user.id, role: user.role
        },"secret")
        res.send({user, token})
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}