import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwtConstants';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import mockUsers from '../mocks/mockUsers';

describe('AuthController', () => {
    let controller: AuthController;
    let authService: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            imports : [
                UsersModule,
                JwtModule.register({
                    global: true,
                    secret: jwtConstants.secret,
                    signOptions: { expiresIn: '60s' },
                }),
            ],
            providers : [AuthService]
        }).compile();

        controller = module.get<AuthController>(AuthController);
        authService = module.get<AuthService>(AuthService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('', async () => {
        const spiedOnService = jest.spyOn(authService, 'signIn').mockImplementation(() => new Promise(resolve => resolve({access_token : 'token'})))
        expect(spiedOnService).toHaveBeenCalledTimes(0)
        expect(await controller.signIn({username : mockUsers[0].username, password : mockUsers[0].password})).toStrictEqual({access_token : 'token'})
        expect(spiedOnService).toHaveBeenCalledTimes(1)
    })
});
