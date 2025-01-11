import { Body, Controller, Get, ParseIntPipe } from '@nestjs/common';
// import { UsersService } from './users.service';
import { UsersDynamicService } from './usersDynamic.service';
import { ParseDatePipe } from './parseDate.pipe';
import { timestamp } from 'rxjs';

@Controller('users')
export class UsersController {

    constructor(private userSevice:UsersDynamicService){}

    @Get('/')
    findAllUser(@Body('timestamp' , ParseDatePipe) timestamp:number){
        console.log(typeof timestamp,timestamp)
        return this.userSevice.findAllUser()
    }
}
