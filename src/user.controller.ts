import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, Query, Redirect, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./user.service";
import { createUserDto } from "./dto/userCreate.dto";

// interface QueryParams {
//     name:string
//     age:number,
// }
interface bodyDto {
    name:string
    age:number,
    id : number
}


@Controller('/users')
export class userController{
   
    // @Get('/profile')
    // @Redirect('/users/account')
    // getUserProfile(@Req() req:Request){
    //     const rn = (Math.random()*10+1)
    //     if(rn < 5){
    //         return {
    //             url : '/users/wallet'
    //         }
    //     }
    // }   

    // @Get('/account')
    // userAccountRoute(){
    //     return {
    //         message : 'account working'
    //     }
    // }
    
    // @Get('wallet')
    // userWalletRoute(){
    //     return {
    //         message : 'wallet working'
    //     }
    // }
    // @Get('/video/:id')
    // getVideo(@Query() query:QueryParams){
    //     console.log(query)
    //     return query
    // }

    // @Post('/video')
    // postVideo(@Body() body:bodyDto){
    //     console.log(body);
    //     return body
    // }

    // @Get()
    // findAllUser(){
    //     return USERS
    // }
    
    // @Post()
    // createUser(@Body() body:bodyDto){
    //     USERS.push(body);
    //     return {
    //         message : 'user add successfully'
    //     }
    // }

    // @Get(':id')
    // findById(@Param('id') id:number){
    //     const user = USERS.find(user => user.id == +id);
    //     return user
    // }

    // @Patch(':id')
    // findByIdAndUpdate(@Param('id') id:number,@Body() body:bodyDto){
    //     let userIndex = USERS.findIndex(user => user.id == id);
    //     USERS[userIndex] = body
    //     return {
    //         message : 'user updated successfully'
    //     }
    // }

    // @Delete(':id')
    // deleteUser(@Param('id') id:number){
    //     USERS = USERS.filter(user => user.id != id)
    //     return {
    //         message : `user deleted successfully with id: ${id}`
    //     }
    // }

    // constructor(@Inject('DATABASE_CONNECTION') private connection:any){
    //     console.log(this.connection)
    // }

    constructor(private userService:UserService){}

    @Post()
    addUser(@Body() body:createUserDto){
        this.userService.addUser(body);
        return {
            message : 'user add successfully'
        }
    }

    @Get()
    findAllUser() {
        return this.userService.getAllUser();
        
    }

    @Get('/:id')
    findById(@Param('id') id:number){
        const user = this.userService.getUserById(id)
        if(!user){
            return {
                msg : 'user not found'
            }
        }
        return user
    }

    @Patch('/:id')
    updateUser(@Param('id') id:number ,@Body() updateUser:createUserDto){
        this.userService.updateUser(id,updateUser)
        return {
            message : 'update user successfully'
        }
    }

    @Delete('/:id')
    deleteUser(@Param('id') id:number){
        this.userService.deleteUser(id)
        return {
            message : `user deleted use id : ${id}`
        }
    }



}