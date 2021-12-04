import express from "express";
import getServicesList, {swGetService} from './service-get.route'
import createTheService, {swPostService} from './service-post.route'
import updateTheService, {swPutService} from './service-put.route'
import deleteTheService, {swDeleteService} from './service-delete.route'
// here the our swagger info
export const swServiceRouter = {
    "/service": {
        "get": {
            ...swGetService
        },
        "post": {
            ...swPostService
        },
        "put": {
            ...swPutService
        },
        "delete": {
            ...swDeleteService
        }
    }
}
// here the routes
const router = express.Router()
    .get('/', getServicesList)
    .post('/', createTheService)
    .put('/:id', updateTheService)
    .delete('/:id', deleteTheService)
export default router