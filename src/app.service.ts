import { Injectable } from "@nestjs/common";

export interface User {
    name : string,
    age : number,
    id : number
}

@Injectable()
export class UserService{
    private store = new Map<number,User>();

    addUser(user:User){
        this.store.set(user.id,user)
    }

    getUserById(id:number){
        return this.store.get(id);
    }

    getAllUser(): User[] {
        return Array.from(this.store.values()); // Convert Map values to an array
    }

    updateUser(id:number,user:User){
        this.store.set(id,user)
    }

    deleteUser(id:number){
        this.store.delete(id)
    }
}