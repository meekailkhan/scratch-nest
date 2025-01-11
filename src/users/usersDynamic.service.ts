import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersDynamicService {
    findAllUser(){
        return {
            message : 'all users from dynamic module'
        }
    }
}
