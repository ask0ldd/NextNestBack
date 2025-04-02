import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import users from '../constants/users';

@Module({
  providers: [
    UsersService,
    {
        provide: 'USERS_DATA',
        useValue: users,
    },
  ],
  exports: [UsersService]
})
export class UsersModule {}
