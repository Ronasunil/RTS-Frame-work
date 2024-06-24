import axios, {AxiosResponse} from "axios";
import { Event } from "./Event";



export class Collection<T>{
    private collection: T[]   = [];
    private event:Event = new Event()

    constructor(private url:string) {}

    async getAllData(): Promise<T[]> {
       return axios.get(this.url).then( (res: AxiosResponse) => {
            res.data.forEach((user:T) => {
                this.collection.push(user);
            })

            return this.collection;
        })

        
    }

    save(data:T): void{
        this.collection.push(data);

        axios.post(`${this.url}/users`, data).then((res: AxiosResponse) => {
            this.event.on("save", () => console.log("data has been saved"))
        })
    }


}