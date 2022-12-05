import express, {Application} from 'express';
import userRouter from './users/infrastructure/routes';
import postRouter from './posts/infrastructure/routes';
import authRouter from './auth/infrastructure/routes';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/auth', authRouter);

app.listen(4900, () => {
        console.log('Server Running on port 4900');
})