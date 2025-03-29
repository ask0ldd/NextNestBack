
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  // UseGuards
} from '@nestjs/common';
// import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { User, UsersService } from 'src/users/users.service';
import { AuthGuard } from './auth.guard';
  
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UsersService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: {username : string, password : string}) {
        console.log("sign in")
        // !!! deal with username & password missing
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) : User | undefined { // @Request() req : {user: string} set by middleware
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        if(req.user) return this.usersService.findOne(req.user)
    }

    @Get('test')
    getTest(@Body() testDto : {user: string}) : string{
        console.log(testDto)
        return testDto.user
    }
}
  