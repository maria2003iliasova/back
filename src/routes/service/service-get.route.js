import prisma from "../../lib/prisma"

export const swGetService = {
    "summary": "Retrieve the list with all of the services",
    "tags": [
        "service"
    ],
    "responses": {
        "200": {
            "description": "Object with services info"
        }
    }
}
// the route
export default async (req, res) => {
    const services = await prisma.service.findMany({
        where:{
            category:req.query.category.toUpperCase()
        }
    })
    res.send(services)
}