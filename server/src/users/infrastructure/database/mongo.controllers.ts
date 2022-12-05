import { UserEntity, UserEntityWithoutSensitiveData } from '../../entities/user.entity';
import UserModel from './mongo.model';
import mongoose from 'mongoose';
import 'dotenv/config';

class MongoControllers {
    private async connectWithEnv() {
        await mongoose.connect(process.env.MONGO_URI!);
    }

    public async getAllUsers(): Promise<UserEntityWithoutSensitiveData[] | null> {
        this.connectWithEnv();
        const listOfUsers: Array<UserEntity> = await UserModel.find({})
        .select('id username firstName LastName email age -_id');
        return listOfUsers;
    }

    public async getUserById(id: string): Promise<UserEntityWithoutSensitiveData | null>{
        this.connectWithEnv();
        const user: UserEntity | null = await UserModel.findOne({id})
        .select('id username firstName LastName email age -_id');
        return user;
    }

    public async createUser(user: UserEntity): Promise<string> {
        this.connectWithEnv();
        const newUSer = await UserModel.create(user);
        return newUSer.id;
    }

    public async modifyUser(id: string, user: UserEntity): Promise<UserEntityWithoutSensitiveData | null> {
        this.connectWithEnv();
        const modifiedUser = await UserModel.findOneAndUpdate({id}, user)
        .select('id username firstName LastName email age -_id');
        return modifiedUser;
    }

    public async deleteUser(id: string): Promise<string | null> {
        this.connectWithEnv();
        const userAlreadyExists = await UserModel.findOne({id});
        if(userAlreadyExists === null) return null
        const deletedUser = await UserModel.findOneAndDelete({id})
        .select('id username firstName LastName email age -_id');
        return deletedUser?.id;
    }

    public async isEmailAlreadyInUse(email: string): Promise<boolean> {
        this.connectWithEnv();
        const user: UserEntity | null = await UserModel.findOne({email});
        if(user === null) return false;
        return true;
    }

    public async getUserByEmail(email: string): Promise<UserEntity | null> {
        this.connectWithEnv();
        const user: UserEntity | null = await UserModel.findOne({email})
        .select('id username firstName LastName email password age -_id');
        return user;
    }
}

export default new MongoControllers();