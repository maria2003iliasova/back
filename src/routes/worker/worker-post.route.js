import prisma from '../../lib/prisma'
import schema, {joiSchema} from './worker.spec/worker.schema'
export const swPostWorker = {
    "summary": "Create the new worker",
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
            "description": "Worker created"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    try {
        await joiSchema.validateAsync(req.body)
        const worker = await prisma.worker.create({
            data: req.body
        })
        res.send(worker)
    } catch(err) {
        res.send(err)
    }
}