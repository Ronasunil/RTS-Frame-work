type Callback = () => void


export class Event{

    public event:{[key: string]: Callback[]} = {}

    on(event: string, callback: Callback) {
        
        const handlers: Callback[] = this.event[event] || [];
        handlers.push(callback)
        console.log(handlers, this.event)
        this.event[event] = handlers
         console.log(this.event)

    }


    trigger(event:string): void{
        if(!this.event[event]) return
        this.event[event].forEach(callback => callback());
    }

    
}


