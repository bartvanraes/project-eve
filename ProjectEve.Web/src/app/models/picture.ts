import { Guid } from "../utilities/guid";

export class Picture {
    constructor(public id: Guid, public thumbnailUrl: string, public url: string) {}
}