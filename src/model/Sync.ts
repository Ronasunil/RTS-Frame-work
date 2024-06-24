import axios, {AxiosResponse} from "axios"


interface HasId{
    id?:string;
}

export type Fn = (res: AxiosResponse) => void;


export class Sync<T extends HasId>{

    constructor(public rootUrl: string){};


    fetch =  (id: string, fn:Fn ):void => {
        axios.get(`${this.rootUrl}/${id}`).then((res: AxiosResponse):void  => {
            fn(res)
        })
    }




    save(data: T):void {

        const {id} = data
        if(id) {
            axios.put(`${this.rootUrl}/${id}`,data)
        }else{
            console.log(this.rootUrl)
            axios.post(`${this.rootUrl}`, data)
        }
    }
}
