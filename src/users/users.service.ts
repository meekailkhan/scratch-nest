import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAllUser(){
        return {
            message : 'all users'
        }
    }
}
