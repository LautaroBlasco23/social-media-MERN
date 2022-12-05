import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import UserMongoControllers from '../../../../users/infrastructure/database/mongo.controllers';
import { Request, Response } from 'express';

const registerUser = async (req: Request, res: Response) => {
    const data = await UserMongoControllers.isEmailAlreadyInUse(req.body.email);
    res.status(200).send(data)
}


export default registerUser;