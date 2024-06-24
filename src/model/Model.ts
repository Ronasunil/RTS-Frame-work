
import { Fn} from "./Sync";



type Callback = () => void

interface Events{
    on(event: string, callback:Callback):void;
    trigger(event:string): void;
}


interface ApiSync<T>{
    fetch(id:string, fn:Fn):void;
    save (data:T): void;
}

interface DataAttribute<T> {
    get<K extends keyof T>(key: K):T[K];
    set(update:T): void;
    getAll():T
}

export class Model<T> {
    
    constructor(private event: Events, private sync:ApiSync<T>, public attribute: DataAttribute<T>) {}
    

    get on() {
        
        return this.event.on;
    }

    get trigger() {
        return this.event.trigger;
    }

    get fetch() {
        return this.sync.fetch
    }

     save() {
       const data = this.attribute.getAll()
       this.sync.save(data);
       console.log(this)
       this.trigger("update")
    }


    get get() {
    
        return this.attribute.get
    }

    get  set() {
        return this.attribute.set

    }

}