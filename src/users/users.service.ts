import { Inject, Injectable } from '@nestjs/common';
import { User } from '../constants/users';

/*export type User = {
    userId : number
    username : string
    password : string
}

const SALT_ROUNDS = 10;*/

@Injectable()
export class UsersService {

    constructor(
        @Inject('USERS_DATA') private readonly users: User[],
    ) {}

    /*private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: bcrypt.hashSync('changeme', SALT_ROUNDS),
        },
        {
            userId: 2,
            username: 'maria',
            password: bcrypt.hashSync('guess', SALT_ROUNDS),
        },
    ]*/
    
    findOne(username: string): User | undefined {
        return this.users.find(user => user.username === username)
    }
}
