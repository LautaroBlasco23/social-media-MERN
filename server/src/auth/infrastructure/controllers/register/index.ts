import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import 'dotenv/config';
import UserMongoControllers from '../../../../users/infrastructure/database/mongo.controllers';
import { Request, Response } from 'express';

const registerUser = async (req: Request, res: Response) => {
    try {
        // User inputs validation
        const userData = await UserMongoControllers.getUserByEmail(req.body.email);
        if(userData !== null) throw Error('eaou');
        
        req.body.id = uuid();
        req.body.password = await bcrypt.hash(req.body.password, Number(process.env.SALT_ROUNDS!));

        const newUserId = await UserMongoControllers.createUser(req.body);

        //Token generation
        const {firstName, lastName, id} = req.body;
        const userToken = jwt.sign({firstName, lastName, id}, process.env.JWT_SECRET!)

        res.status(200).send({userToken, newUserId});
        
    } catch (error: any) {
        if (error.message === 'eaou') return res.status(400).send({error: 'Email already on use'})
        if(process.env.env == 'development') console.log(error)
        res.status(500).send('Server error')
    }
}


export default registerUser;