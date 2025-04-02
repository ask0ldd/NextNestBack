/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}
    
    async signIn(username: string, pass: string): Promise<{ access_token: string }> {

        const user = this.usersService.findOne(username)

        if(!user?.password) throw new Error("User has not password")

        if (!this.comparePasswords(pass, user.password)) {
            throw new UnauthorizedException()
        }

        const payload = { sub: user.userId, username: user.username, admin : false }

        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }

    comparePasswords(plainPassword: string, hashedPassword: string): boolean {
        return bcrypt.compareSync(plainPassword, hashedPassword);
    }
}
