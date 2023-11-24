import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/users/user.routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', UserRoutes)

app.get('/', (req: Request, res: Response)=>{
  res.send('hello rubel developer')
})

export default app;
