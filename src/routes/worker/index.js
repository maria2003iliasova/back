import express from "express";
import getWorkersList, {swGetWorker} from './worker-get.route'
import createTheWorker, {swPostWorker} from './worker-post.route'
import updateTheWorker, {swPutWorker} from './worker-put.route'
import deleteTheWorker, {swDeleteWorker} from './worker-delete.route'
import { verifyToken, isAdmin } from "../../middleware/authJwt";
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
    .post('/', verifyToken, isAdmin, createTheWorker)
    .put('/:id', verifyToken, isAdmin, updateTheWorker)
    .delete('/:id', verifyToken, isAdmin, deleteTheWorker)
export default router