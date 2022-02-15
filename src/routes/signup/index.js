import express from "express";
import createTheSignup, {swPostSignup} from './signup-post.route'
// here the our swagger info
export const swSignupRouter = {
    "/signup": {
        "post": {
            ...swPostSignup
        }
    }
}
// here the routes
const router = express.Router()
    .post('/', createTheSignup)
export default router