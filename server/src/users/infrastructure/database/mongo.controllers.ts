import { UserRepository } from '../../entities/user.repository';
import UserModel from './mongo.model';

const MongoControllers: UserRepository = {
    getAllUsers = async () => {
        try {
            const listOfUsers = await UserModel.find({});
            return listOfUsers;
        } catch (error) {
            return null
        }
    }

    getUserById = () => {

    }

    createUser = () => {

    }

    modyUser = () => {

    }

    deleteUser = () => {

    }
}

export default MongoControllers;