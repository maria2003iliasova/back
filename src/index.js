import express from "express"
import swagger from "./swagger.def";
import swaggerUI from "swagger-ui-express"
import signinRouter from './routes/signin';
import signupRouter from './routes/signup';
import recordRouter from './routes/record';
import serviceRouter from './routes/service';
import workerRouter from './routes/worker';
import prisma from "./lib/prisma";
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger))
app.use('/signin', signinRouter)
app.use('/signup', signupRouter)
app.use('/record', recordRouter)
app.use('/service', serviceRouter)
app.use('/worker', workerRouter)
app.listen(3001, () => console.log("Server is Up!"))