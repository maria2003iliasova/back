import schema, {joiSchema} from './login.spec/login.schema'
export const swPutUser = {
    "summary": "Update the user",
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
            "description": "User updated"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    try {
        await joiSchema.validateAsync(req.body)
        const user = await prisma.user.update({
            data: req.body,
            where:{
                id:Number(req.params.id)
            }
        })
        res.send(user)
    } catch(err) {
        res.send(err)
    }
}