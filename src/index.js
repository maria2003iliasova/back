import express from "express"
import swagger from "./swagger.def";
import swaggerUI from "swagger-ui-express"
import loginRouter from './routes/login';
import recordRouter from './routes/record';
import serviceRouter from './routes/service';
import workerRouter from './routes/worker';
import prisma from "./lib/prisma";
const app = express()
app.use(express.json())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger))
app.use('/login', loginRouter)
app.use('/record', recordRouter)
app.use('/service', serviceRouter)
app.use('/worker', workerRouter)
app.listen(3001, () => console.log("Server is Up!"))