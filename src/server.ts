
import dotenv from 'dotenv'

dotenv.config();


import express from 'express';
import cors from 'cors';
import { sample_course, sample_teacher } from './data';
import courseRouter from './routers/course.router'
import teacherRouter from './routers/teacher.router';
import { dbConnect } from './configs/database.config';

dbConnect()
const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));


app.use('/api/courses', courseRouter)

app.use('/api/teachers', teacherRouter)

const port = 5000;

app.listen(port, () => {
    console.log('sucess on port ' + port)
})