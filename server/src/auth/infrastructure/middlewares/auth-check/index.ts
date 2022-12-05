import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ').pop();
        if(token === undefined) return res.status(403).send('you have to login or register');
        
        jwt.verify(token!, process.env.JWT_SECRET!);
        next();        
    } catch (error) {
        res.status(403).send('invalid token');
    }
};

export default isAuthorized;