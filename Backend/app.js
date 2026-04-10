import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js"
import reservationRouter from "./routers/resevationrouter.js"
import contact from './routers/contactrouter.js'

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(cors({
            origin: [process.env.FRONTEND_URL],
            methods: ["POST"],
            credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/",contact)

dbconnection();

app.use(errorMiddleware)


export { app };
