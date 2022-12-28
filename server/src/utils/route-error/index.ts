import {Request, Response} from 'express';

const routeError = (req: Request, res: Response) => {
    res.status(404).send('Invalid route!');
};

export default routeError;