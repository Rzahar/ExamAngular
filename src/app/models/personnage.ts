import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class Personnage {
    title: string;   
    id: number;   
    key: string;
    name: string;
    active: boolean;

    constructor(title:string, id: number, key: string, name: string, active: boolean){
        this.title = title;
        this.id = id;
        this.key = key;
        this.name = name;
        this.active = active;
    }

  

}