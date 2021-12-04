import express from "express";
import getRecordsList, {swGetRecord} from './record-get.route'
import createTheRecord, {swPostRecord} from './record-post.route'
import updateTheRecord, {swPutRecord} from './record-put.route'
import deleteTheRecord, {swDeleteRecord} from './record-delete.route'
// here the our swagger info
export const swRecordRouter = {
    "/record": {
        "get": {
            ...swGetRecord
        },
        "post": {
            ...swPostRecord
        },
        "put": {
            ...swPutRecord
        },
        "delete": {
            ...swDeleteRecord
        }
    }
}
// here the routes
const router = express.Router()
    .get('/', getRecordsList)
    .post('/', createTheRecord)
    .put('/:id', updateTheRecord)
    .delete('/:id', deleteTheRecord)
export default router