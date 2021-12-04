import express from "express";
import getWorkersList, {swGetWorker} from './worker-get.route'
import createTheWorker, {swPostWorker} from './worker-post.route'
import updateTheWorker, {swPutWorker} from './worker-put.route'
import deleteTheWorker, {swDeleteWorker} from './worker-delete.route'
// here the our swagger info
export const swWorkerRouter = {
    "/worker": {
        "get": {
            ...swGetWorker
        },
        "post": {
            ...swPostWorker
        },
        "put": {
            ...swPutWorker
        },
        "delete": {
            ...swDeleteWorker
        }
    }
}
// here the routes
const router = express.Router()
    .get('/', getWorkersList)
    .post('/', createTheWorker)
    .put('/:id', updateTheWorker)
    .delete('/:id', deleteTheWorker)
export default router