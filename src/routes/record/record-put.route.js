import schema, {joiSchema} from './record.spec/record.schema'
export const swPutRecord = {
    "summary": "Update the record",
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
            "description": "Record updated"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    try {
        await joiSchema.validateAsync(req.body)
        const record = await prisma.record.update({
            data: req.body,
            where:{
                record_id:Number(req.params.id)
            }
        })
        res.send(record)
    } catch(err) {
        res.send(err)
    }
}