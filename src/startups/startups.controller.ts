import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { IStartup } from '../constants/startups';
import { StartupsService } from './startups.service';

@Controller('startups')
export class StartupsController {
    constructor(private readonly startupsService: StartupsService) {}

    @Get('')
    getStartups(): IStartup[] {
        return this.startupsService.findAll()
    }

    @Get(':id')
    getStartup(@Param('id') id: string): IStartup | undefined {
        const startup = this.startupsService.findOne(parseInt(id))
        if (!startup) {
            throw new NotFoundException(`Startup with ID ${id} not found`)
        }
        return startup;
    }
}
