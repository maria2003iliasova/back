import prisma from '../../lib/prisma'
import schema, {joiSchema} from './record.spec/record.schema'
export const swDeleteRecord = {
    "summary": "Delete the record",
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
            "description": "Record deleted"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    const records = await prisma.record.delete({
        where:{
            id:Number(req.params.id)
        }
    })
    res.send(records)
}