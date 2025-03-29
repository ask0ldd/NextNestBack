import { Injectable } from '@nestjs/common';
import startups, { IStartup } from 'src/constants/startups';

@Injectable()
export class StartupsService {
    findAll(): IStartup[] {
        return startups
    }

    findOne(id : number) : IStartup | undefined {
        return startups.find(startup => startup.id == id)
    }
}
