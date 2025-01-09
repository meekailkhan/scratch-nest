import { Controller, Get} from "@nestjs/common";

@Controller('/album')
export class albumController{
    @Get()
    getUserProfile(){
        return 'album controller'
    }   
}