import express from 'express'
import helmet from 'helmet'
import log from './logger'
import connect from './db'
import cors from 'cors'
import routers from './routers'
import { limiter } from './middleware/rateLimiter'
import dotenv from 'dotenv'
dotenv.config()
const PORT: number = Number(process.env.PORT) || 2000
const HOST: string = process.env.HOST || 'localhost'
const IS_PRODUCTION = process.env.IS_PRODUCTION || false
const allowedOrigins = ['http://localhost:3000', 'http://localhost:2000', '*'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

const app = express();
app.use(helmet());
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/access', express.static('access'));

if (IS_PRODUCTION) {
    app.use('/', limiter)
}

app.listen(PORT, HOST, () => {
    log.info(`Server listing at http://${HOST}:${PORT}`)

    connect();

    routers(app);
})

