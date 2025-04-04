import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwtConstants';
import users from '../constants/users';
import { jwtDecode } from 'jwt-decode';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                UsersModule,
                JwtModule.register({
                    global: true,
                    secret: jwtConstants.secret,
                    signOptions: { expiresIn: '60s' },
                }),
            ],
            providers: [AuthService],
        }).compile();

        service = module.get<AuthService>(AuthService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return the a token with the expected value when passing known credentials to signIn', async () => {
        expect((await service.signIn(users[0].username, "changeme")).access_token).toBeDefined()
        const token = (await service.signIn(users[0].username, "changeme")).access_token
        const decodedToken = jwtDecode<{admin : boolean, username : string, sub : number, iss : string}>(token)
        expect(decodedToken.admin).toBeFalsy()
        expect(decodedToken.username).toBe("john")
        expect(decodedToken.sub).toBe(1)
    })

    it('should return true when plain password related to hashed password passed to comparePasswords', () => {
        expect(service.comparePasswords("changeme", users[0].password)).toBeTruthy()
        expect(service.comparePasswords("guess", users[1].password)).toBeTruthy()
    })

    it('should return false when plain password not related to hashed password passed to comparePasswords', () => {
        expect(service.comparePasswords("zzzzzzzzz", users[0].password)).toBeFalsy()
        expect(service.comparePasswords("zzzzzzzzz", users[1].password)).toBeFalsy()
    })
});
