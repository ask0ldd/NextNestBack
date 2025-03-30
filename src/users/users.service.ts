import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = {
    userId : number
    username : string
    password : string
}

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {

    private readonly users = [
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
    ]
    
    findOne(username: string): User | undefined {
        return this.users.find(user => user.username === username)
    }
}
