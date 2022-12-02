import { UserEntity, UserEntityWithoutSensitiveData } from '../../entities/user.entity';
import UserModel from './mongo.model';
import mongoose from 'mongoose';
import 'dotenv/config';

const MongoControllers = {
    async connectWithEnv() {
        await mongoose.connect(process.env.MONGO_URI!);
    },

    async getAllUsers(): Promise<UserEntityWithoutSensitiveData[] | null> {
        this.connectWithEnv();
        const listOfUsers: Array<UserEntity> = await UserModel.find({});
        return listOfUsers;
    },

    async getUserById(id: string): Promise<UserEntityWithoutSensitiveData | null>{
        const user: UserEntity | null = await UserModel.findOne({id});
        return user;
    },

    async createUser(user: UserEntity): Promise<string> {
        const newUSer = await UserModel.create(user);
        return newUSer.id;
    },

    async modifyUser(id: string, user: UserEntity): Promise<UserEntityWithoutSensitiveData | null> {
        const modifiedUser = await UserModel.findOneAndUpdate({id}, user);
        return modifiedUser;
    },

    async deleteUser(id: string): Promise<string | null> {
        const deletedUser = await UserModel.findOneAndDelete({id});
        return deletedUser?.id;
    }
}

export default MongoControllers;