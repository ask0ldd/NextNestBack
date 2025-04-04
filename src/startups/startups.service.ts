import { Inject, Injectable } from '@nestjs/common';
import { IStartup } from '../constants/startups';

@Injectable()
export class StartupsService {

    constructor(
        @Inject('STARTUPS_DATA') private readonly startups: IStartup[],  // [!] injecting constants
    ) {}

    findAll(): IStartup[] {
        return this.startups
    }

    findOne(id : number) : IStartup | undefined {
        return this.startups.find(startup => startup.id == id)
    }
}
