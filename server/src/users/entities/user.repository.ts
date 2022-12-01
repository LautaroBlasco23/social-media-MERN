import {UserEntity, UserEntityWithoutSensitiveData} from './user.entity'

export interface UserRepository {
    getAllUsers: () => Array<UserEntity> | null
    getUserById: (id: String) => UserEntityWithoutSensitiveData | null
    createNewUser: (User: UserEntity) => string | null // user's id.
    modifyUser: (user: UserEntity, id: string) => UserEntityWithoutSensitiveData | null
    deleteUSer: (id: string) => string | null // user's id.
}