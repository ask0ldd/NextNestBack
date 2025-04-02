import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import mockUsers from '../mocks/mockUsers';

describe('UsersService', () => {
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                { provide: 'USERS_DATA', useValue: mockUsers }, // [!] injecting mock data
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should be retrieve the expected user when findone is called with an existing username', () => {
        expect(service.findOne("user1")?.userId).toBe(mockUsers[0].userId)
        expect(service.findOne("user2")?.userId).toBe(mockUsers[1].userId)
        /*expect(service.findOne("john")?.username).toBe("john")
        expect(service.findOne("maria")?.username).toBe("maria")*/
    })
});
