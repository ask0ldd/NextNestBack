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

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, SALT_ROUNDS)
    }

    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ]
    
    findOne(username: string): User | undefined {
        return this.users.find(user => user.username === username)
    }
}
