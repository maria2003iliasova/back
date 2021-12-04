import prisma from "../../lib/prisma"

export const swGetWorker = {
    "summary": "Retrieve the list with all of the workers",
    "tags": [
        "worker"
    ],
    "responses": {
        "200": {
            "description": "Object with users info"
        }
    }
}
// the route
export default async (req, res) => {
    const workers = await prisma.worker.findMany()
    res.send(workers)
}