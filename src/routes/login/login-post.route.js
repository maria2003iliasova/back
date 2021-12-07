import prisma from '../../lib/prisma'
import schema, {joiSchema} from './login.spec/login.schema'
export const swPostUser = {
    "summary": "Create the new user",
    "tags": [
        "login"
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
        const user = await prisma.user.create({
            data: req.body
        }).catch(console.log)
        res.send(user)
    } catch(err) {
        res.send(err)
    }
}