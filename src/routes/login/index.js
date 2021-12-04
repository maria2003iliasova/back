import express from "express";
import getUsersList, {swGetUser} from './login-get.route'
import createTheUser, {swPostUser} from './login-post.route'
import updateTheUser, {swPutUser} from './login-put.route'
import deleteTheUser, {swDeleteUser} from './login-delete.route'
// here the our swagger info
export const swUserRouter = {
    "/login": {
        "get": {
            ...swGetUser
        },
        "post": {
            ...swPostUser
        },
        "put": {
            ...swPutUser
        },
        "delete": {
            ...swDeleteUser
        }
    }
}
// here the routes
const router = express.Router()
    .get('/', getUsersList)
    .post('/', createTheUser)
    .put('/:id', updateTheUser)
    .delete('/:id', deleteTheUser)
export default router