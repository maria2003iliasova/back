import {swSigninRouter} from './routes/signin'
import {swSignupRouter} from './routes/signup'
import {swRecordRouter} from './routes/record'
import {swServiceRouter} from './routes/service'
import {swWorkerRouter} from './routes/worker'
const swagger = {
    openapi: '3.0.0',
    info: {
        title: 'Express API',
        version: '1.0.0',
        description: 'The REST API test service'
    },
    servers: [
        {
            url: 'http://localhost:3001',
            description: 'Development server'
        }
    ],
    paths: {
        ...swSigninRouter,
        ...swSignupRouter,
        ...swRecordRouter,
        ...swServiceRouter,
        ...swWorkerRouter
    }
}
export default swagger