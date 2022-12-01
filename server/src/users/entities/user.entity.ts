export interface UserEntity {
    id: string
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    age: number
}

export interface UserEntityWithoutSensitiveData {
    id: string
    username: string
    firstName: string
    lastName: string
    age: number
}