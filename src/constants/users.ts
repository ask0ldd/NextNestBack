import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const users : User[] = [
    {
        userId: 1,
        username: 'john',
        email: 'john@yc.com',
        password: bcrypt.hashSync('changeme', SALT_ROUNDS),
    },
    {
        userId: 2,
        username: 'maria',
        email: 'maria@yc.com',
        password: bcrypt.hashSync('guess', SALT_ROUNDS),
    },
]

export default users

export type User = {
    userId : number
    username : string
    password : string
    email : `${string}@${string}.${string}`
}