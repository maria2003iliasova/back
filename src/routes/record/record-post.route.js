import prisma from '../../lib/prisma'
import schema, {joiSchema} from './record.spec/record.schema'
export const swPostRecord = {
    "summary": "Create the new record",
    "tags": [
        "record"
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
            "description": "Record created"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    try {
        await joiSchema.validateAsync(req.body)
        const {user, worker, service, ...data}=req.body
        const record = await prisma.record.create({
            data: {
                ...data,
                user:{
                    connect:user
                },
                worker:{
                    connect:worker
                },
                service:{
                    connect:service
                }
            },
        }).catch(console.log)
        res.send(record)
    } catch(err) {
        res.send(err)
    }
}