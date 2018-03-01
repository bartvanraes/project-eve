import { Guid } from '../utilities/guid';
import { Gender } from '../shared/enums/gender'

export class ProfileOverviewElement {
    constructor(public id: Guid, public userName: string, public age: number, public gender: Gender, public location: string, public thumbnailUrl: string) {}
}

