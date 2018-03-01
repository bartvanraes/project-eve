import { Guid } from '../utilities/guid';
import { Gender } from '../shared/enums/gender'
import { Orientation } from '../shared/enums/orientation';
import { RelationshipStatus } from '../shared/enums/relationship-status';
import { Language } from '../shared/enums/language';
import { Picture } from './picture';

export class ProfileDetail {
    constructor(public id: Guid, public userName: string, public gender: Gender, public age: number, public profilePicture: Picture, public location: string, 
        public tags: string[], public languages: Language[], public orientation: Orientation, public status: RelationshipStatus, public height: number, 
        public wantsToChat: boolean, public wantsToTradePics: boolean, public wantsToMeetIRL: boolean, public lastOnline: string, 
        public tokensToAccessFullProfile: number, public numberOfPublicBlogPosts: number, public numberOfPrivateBlogPosts: number, public aboutMe: string,
        public myInterests: string, public numberOfPrivatePictures: number, public publicPictures: Picture[]) {}

    get isPrivate() : boolean {
        return false;
    }


}