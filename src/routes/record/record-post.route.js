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
        const record = await prisma.record.create({
            data: req.body
        })
        res.send(record)
    } catch(err) {
        res.send(err)
    }
}