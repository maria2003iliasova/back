import express from "express";
import createTheSignin, {swPostSignin} from './signin-post.route'
// here the our swagger info
export const swSigninRouter = {
    "/signin": {
        "post": {
            ...swPostSignin
        }
    }
}
// here the routes
const router = express.Router()
    .post('/', createTheSignin)
export default router