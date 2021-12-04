import prisma from "../../lib/prisma"

export const swGetRecord = {
    "summary": "Retrieve the list with all of the records",
    "tags": [
        "record"
    ],
    "responses": {
        "200": {
            "description": "Object with records info"
        }
    }
}
// the route
export default async (req, res) => {
    const records = await prisma.record.findMany()
    res.send(records)
}