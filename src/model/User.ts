import { Attribute } from "./Attribute";
import { Model } from "./Model";
import { Sync } from "./Sync";
import { Event } from "./Event";
import { Collection } from "./Collection";



export interface userProps {
    id?:string;
    name?: string;
    age?: number;
}



export class User extends Model<userProps> {

    static buildUser(userData: userProps):User {
        const user = new User(new Event(),new Sync<userProps>("http://localhost:3000/users"), new Attribute<userProps>(userData)) 
        return user;
    }

    static buildCollection(): Collection<User>{
        const collection = new Collection<User>("http://localhost:3000/users");
        return collection;
    }


    getRandomAge() {
        const randomAge = Number.parseFloat(String(Math.random() * 100));
        this.set({age: randomAge})
        this.save()
    }

}



