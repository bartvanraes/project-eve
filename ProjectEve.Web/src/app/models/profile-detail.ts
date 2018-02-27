import { Guid } from '../utilities/guid';
import { Gender } from '../shared/enums/gender'
import { Orientation } from '../shared/enums/orientation';
import { RelationshipStatus } from '../shared/enums/relationship-status';
import { Language } from '../shared/enums/language';

export class ProfileDetail {
    id: Guid;
    userName: string;
    gender: Gender;
    age: number;
    thumbnailUrl: string;
    location: string;
    tags: string[];
    languages: Language[];
    orientation: Orientation;
    status: RelationshipStatus;
    height: number;
    wantsToChat: boolean;
    wantsToTradePics: boolean;
    wantsToMeetIRL: boolean;
    lastOnline: string;
    tokensToAccessFullProfile: number;
    numberOfPublicBlogPosts: number;
    numberOfPrivateBlogPosts: number;
    aboutMe: string;
    myInterests: string;

}