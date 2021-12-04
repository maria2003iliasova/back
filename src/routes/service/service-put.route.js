import schema, {joiSchema} from './service.spec/service.schema'
export const swPutService = {
    "summary": "Update the service",
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
            "description": "Service updated"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    try {
        await joiSchema.validateAsync(req.body)
        const service = await prisma.service.update({
            data: req.body,
            where:{
                service_id:Number(req.params.id)
            }
        })
        res.send(service)
    } catch(err) {
        res.send(err)
    }
}