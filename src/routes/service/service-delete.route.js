import prisma from '../../lib/prisma'
import schema, {joiSchema} from './service.spec/service.schema'
export const swDeleteService = {
    "summary": "Delete the service",
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
            "description": "Service deleted"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    const services = await prisma.service.delete({
        where:{
            id:Number(req.params.id)
        }
    })
    res.send(services)
}