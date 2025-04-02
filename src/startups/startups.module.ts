import { Module } from '@nestjs/common';
import { StartupsController } from './startups.controller';
import { StartupsService } from './startups.service';
import { startups } from '../constants/startups';

@Module({
    controllers: [StartupsController],
    providers: [
        StartupsService,
        {
            provide: 'STARTUPS_DATA',
            useValue: startups,
        },
    ],
})
export class StartupsModule {
}
