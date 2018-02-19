import { Guid } from '../utilities/guid';
import { Gender } from '../shared/enums/gender'

export class ProfileOverviewElement {
    id: Guid;
    userName: string;
    age: number;
    gender: Gender;
    location: string;
    thumbnailUrl: string;
}

