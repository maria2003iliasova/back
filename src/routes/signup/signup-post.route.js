import prisma from '../../lib/prisma'
import schema, {joiSchema} from './signup.spec/signup.schema'
import bcrypt from "bcrypt"
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
        const hashPassword = await bcrypt.hash(req.body.password, 5);
        console.log(hashPassword)
        const user = await prisma.user.create({
            data: {
                ...req.body,
                password: hashPassword
            }
        })
        res.send(user)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}