import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class Personnage {
    private _title: string;
    private _id: number; 
    private _key: string;
    private _name: string;
    private _active: boolean;

    constructor(title:string, id: number, key: string, name: string, active: boolean){
        this._title = title;
        this._id = id;
        this._key = key;
        this._name = name;
        this._active = active;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get key(): string {
        return this._key;
    }
    public set key(value: string) {
        this._key = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get active(): boolean {
        return this._active;
    }
    public set active(value: boolean) {
        this._active = value;
    }


}