import express, {Application, Request, Response} from 'express';


const app: Application = express();

app.get('/', (req: Request, res: Response) => {
        res.status(200).send("hola mundo");
});

app.listen(4900, () => {
        console.log("server runnning on PORT: 4900");
});