import prisma from '../../lib/prisma'
import schema, {joiSchema} from './login.spec/login.schema'
export const swDeleteUser = {
    "summary": "Delete the user",
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
            "description": "User deleted"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    const users = await prisma.user.delete({
        where:{
            id:Number(req.params.id)
        }
    })
    res.send(users)
}