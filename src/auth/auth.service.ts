/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}
    
    async signIn(username: string, pass: string): Promise<{ access_token: string }> {

        console.log("sign in service")

        const user = this.usersService.findOne(username)

        // check password
        if (user?.password !== pass) {
            throw new UnauthorizedException()
        }

        const payload = { sub: user.userId, username: user.username, admin : false }

        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }

    async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}
