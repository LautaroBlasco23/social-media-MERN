import express, {Application} from 'express';
import userRouter from './users/infrastructure/routes';

const app: Application = express();

app.use('/api/users', userRouter);

app.listen(4900, () => {
        console.log('Server Running on port 4900');
})