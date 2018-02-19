import { Guid } from '../utilities/guid';
import { Gender } from '../shared/enums/gender'

export class ProfileDetail {
    id: Guid;
    userName: string;
    gender: Gender;
    location: string;
    //TODO
}