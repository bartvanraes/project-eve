export class Guid {
    constructor (public guid: string) {
        this._guid = guid;
    }

    private _guid: string;

    public ToString(): string {
        return this._guid;
    }

    static newGuid(): Guid {
        return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        }));
    }

    static parse(guid: string): Guid {
        return new Guid(guid);
    }
}
