import prisma from '../../lib/prisma'
import schema, {joiSchema} from './worker.spec/worker.schema'
export const swDeleteWorker = {
    "summary": "Delete the worker",
    "tags": [
        "worker"
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
            "description": "Worker deleted"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    const worker = await prisma.worker.delete({
        where:{
            id:Number(req.params.id)
        }
    })
    res.send(worker)
}