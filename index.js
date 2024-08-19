import express from 'express';
import { usersRouter,fruitsRouter } from './routes/fullstackRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors({
    origin: 'http://localhost:8081',
    credentials:true
}));
app.use('/users',usersRouter);
app.use('/fruits',fruitsRouter);

const port = process.env.PORT || 5003

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})