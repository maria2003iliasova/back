import schema, {joiSchema} from './worker.spec/worker.schema'
export const swPutWorker = {
    "summary": "Update the worker",
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
            "description": "Worker updated"
        },
        "default": {
            "description": "Error message"
        }
    }
}
export default async (req, res) => {
    try {
        await joiSchema.validateAsync(req.body)
        const worker = await prisma.worker.update({
            data: req.body,
            where:{
                worker_id:Number(req.params.id)
            }
        })
        res.send(worker)
    } catch(err) {
        res.send(err)
    }
}