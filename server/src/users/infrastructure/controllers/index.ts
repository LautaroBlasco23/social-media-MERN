import { UserEntity, UserEntityWithoutSensitiveData } from '../../entities/user.entity';
import MongoControllers from '../database/mongo.controllers';
import {Request, Response} from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { v4 as uuid} from 'uuid';
import 'dotenv/config';

const UserControllers = {
    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const listOfUsers: Array<UserEntityWithoutSensitiveData> | null = await MongoControllers.getAllUsers();
            if (listOfUsers === null) throw Error('Cant get list of users with mongo controller');
            res.status(200).json(listOfUsers);
        } catch (error: any) {
            if (process.env.NODE_ENV === 'development') console.log(error.message); 
            res.status(500).send('unexpected error');
        }
        
    },

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const user: UserEntityWithoutSensitiveData | null = await MongoControllers.getUserById(req.params.id);
            if(user === null) throw Error('cant get user with mongo controller');
            res.status(200).json(user);
        } catch (error: any) {
            if (process.env.NODE_ENV === 'development') console.log(error.message); 
            res.status(500).send('unexpected error');
        }
    },

    async createNewUser(req: Request, res: Response): Promise<void> {
        try {
            const {firstName, lastName, email, age, username} = req.body
            const id: string = uuid();
            const encryptedPassword: string = await bcrypt.hash(req.body.password, Number(process.env.SALT_ROUNDS));
            const user: UserEntity = {
                id,
                firstName,
                lastName,
                email,
                age,
                username,
                password: encryptedPassword
            };

            const newUserId: string | null = await MongoControllers.createUser(user);
            if(newUserId === null) throw Error('cant create user with mongo controller');
            res.status(201).send(newUserId);
        } catch (error: any) {
            if (process.env.NODE_ENV === 'development') console.log(error.message); 
            res.status(500).send('unexpected error');
        }
    },

    async modifyUser(req: Request, res: Response): Promise<void> {
        try {
            const {firstName, lastName, email, age, username} = req.body
            const encryptedPassword: string = await bcrypt.hash(req.body.password, Number(process.env.SALT_ROUNDS));
            const user: UserEntity = {
                id: req.params.id,
                firstName,
                lastName,
                email,
                age,
                username,
                password: encryptedPassword
            };

            const modifiedUser: UserEntityWithoutSensitiveData | null = await MongoControllers.modifyUser(req.params.id, user);
            if(modifiedUser === null ) throw Error('cant modify user with mongo controller');
            res.status(200).json(modifiedUser);
        } catch (error: any) {
            if (process.env.NODE_ENV === 'development') console.log(error.message); 
            res.status(500).send('unexpected error');
        }
    },

    async deleteUSer(req: Request, res: Response): Promise<void> {
        try {
            const deletedUserId: string | null = await MongoControllers.deleteUser(req.params.id);
            if(deletedUserId === null) throw Error('cant delete user with mongo controller');
            res.status(200).send(deletedUserId);
        } catch (error: any) {
            if (process.env.NODE_ENV === 'development') console.log(error.message); 
            res.status(500).send('unexpected error');
        }
    },

    async getUserWithToken(req: Request, res: Response): Promise<void> {
        try {
            const userToken: string = req.headers.authorization?.split(' ').pop()!;
            const undecodedToken = jwt.decode(userToken)!;
            if(typeof undecodedToken == 'string') throw Error();

            const userData = await MongoControllers.getUserById(undecodedToken.id);
            
            res.status(200).json(userData);
        } catch (error: any) {
            if (process.env.NODE_ENV === 'development') console.log(error.message); 
            res.status(500).send('unexpected error');   
        }
    }
}

export default UserControllers;