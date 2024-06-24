

export class Attribute<T>{

    constructor(public data: T) {}

    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set = (update: T): void => {
        console.log(this.data)
        Object.assign(this.data , update); 
    }

    getAll(): T {
        return this.data
    }

}