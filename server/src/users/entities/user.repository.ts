import {UserEntity, UserEntityWithoutSensitiveData} from './user.entity'

export interface UserRepository {
    getAllUsers: () => Array<UserEntity>
    getUserById: (id: String) => UserEntityWithoutSensitiveData
    createNewUser: (User: UserEntity) => string // user's id.
    modifyUserWithId: (user: UserEntity, id: string) => UserEntityWithoutSensitiveData
    deleteUSer: (id: string) => string // user's id.
}