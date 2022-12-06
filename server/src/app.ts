import express, {Application} from 'express';
import userRouter from './users/infrastructure/routes';
import postRouter from './posts/infrastructure/routes';
import authRouter from './auth/infrastructure/routes';
import commentRouter from './comments/infrastructure/routes';
import isAuthorized from './auth/infrastructure/middlewares/auth-check';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/users', isAuthorized, userRouter);
app.use('/api/posts', isAuthorized, postRouter);
app.use('api/comments', isAuthorized, commentRouter);


app.listen(4900, () => {
        console.log('Server Running on port 4900');
});