
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { AuthGuard } from './auth.guard';
import { User } from '../constants/users';
  
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UsersService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: {username : string, password : string}) {

        const { username, password } = signInDto
        
        if (!username || !password) {
            throw new Error('Username and password are required')
        }
        
        return this.authService.signIn(username, password)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req : {user : string}) : User | undefined { // @Request() req : {user: string} set by middleware / guard
        const userId = req.user

        if (!userId) {
            throw new Error('User not found in request')
        }

        return this.usersService.findByUsername(userId)
    }

    @UseGuards(AuthGuard)
    @Get('test')
    getTest(@Body() testDto : {user: string}) : string{
        return testDto.user
    }
}
  