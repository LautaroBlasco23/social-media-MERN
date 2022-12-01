import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    age: number;
    password: string;    

    constructor({id, firstName, lastName, username, email, age, password}: UserEntity){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}