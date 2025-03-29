import { Module } from '@nestjs/common';
import { StartupsController } from './startups.controller';
import { StartupsService } from './startups.service';

@Module({
    controllers: [StartupsController],
    providers: [StartupsService],
})
export class StartupsModule {
}
