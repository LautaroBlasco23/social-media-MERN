import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../entities/user.repository";
import { UserValue } from "../entities/user.value";

class UserRepo {
    constructor(private readonly UserRepository:UserRepository){}

    public getAllUsers = () => {
        const listOfUsers = this.UserRepository.getAllUsers();
        return listOfUsers;
    }

    public getUserById = (id: string) => {
        const user = this.UserRepository.getUserById(id);
        return user;
    }

    public createNewUser = (userData: UserEntity) => {
        const newUser = new UserValue(userData);
        this.UserRepository.createNewUser(newUser);
        return newUser.id;
    }

    public modifyUser = (userData: UserEntity, id: string) => {
        const modifiedUser = this.UserRepository.modifyUser(userData, id);
        return modifiedUser;
    }

    public deleteUSer = (id: string) => {
        const deletedUserId = this.UserRepository.deleteUSer(id);
        return deletedUserId;
    } 
}