import { Inject, Injectable } from '@nestjs/common';
import { User } from '../constants/users';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USERS_DATA') private readonly users: User[], // [!] injecting constants
    ) {}
    
    findByUsername(username: string): User | undefined {
        return this.users.find(user => user.username === username)
    }

    findByEmail(email : `${string}@${string}.${string}`){
        return this.users.find(user => user.email === email)
    }
}
