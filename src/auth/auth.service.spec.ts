import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwtConstants';
import users from '../constants/users';

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

    it('Sign In', async () => {
        expect((await service.signIn(users[0].username, "changeme")).access_token).toBeDefined()
    })
});
