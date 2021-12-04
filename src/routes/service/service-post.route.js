import prisma from '../../lib/prisma'
import schema, {joiSchema} from './service.spec/service.schema'
export const swPostService = {
    "summary": "Create the new service",
    "tags": [
        "service"
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
            "description": "Service created"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    try {
        await joiSchema.validateAsync(req.body)
        const service = await prisma.service.create({
            data: req.body
        })
        res.send(service)
    } catch(err) {
        res.send(err)
    }
}