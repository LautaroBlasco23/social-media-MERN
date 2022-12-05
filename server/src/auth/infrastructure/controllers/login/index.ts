import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import UserMongoControllers from '../../../../users/infrastructure/database/mongo.controllers';
import { Request, Response } from 'express';

const loginController = async (req: Request, res: Response) => {
    try {
        // User inputs validation
        const userData = await UserMongoControllers.getUserByEmail(req.body.email);
        if(userData === null) throw Error();
        const isValidPassword = bcrypt.compareSync(req.body.password, userData.password);
        if(!isValidPassword) throw Error();

        //Token generation
        const {firstName, lastName, id} = userData;
        const userToken = jwt.sign({firstName, lastName, id}, process.env.JWT_SECRET!)

        res.status(200).send({userToken});
        
    } catch (error) {
        res.status(400).send({error: 'Wrong credentials'})
    }
}


export default loginController;