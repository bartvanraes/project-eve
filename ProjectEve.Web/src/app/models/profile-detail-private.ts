import { ProfileDetail } from "./profile-detail";
import { Picture } from "./picture";
import { Guid } from "../utilities/guid";
import { Gender } from "../shared/enums/gender";
import { Orientation } from "../shared/enums/orientation";
import { RelationshipStatus } from "../shared/enums/relationship-status";
import { Language } from "../shared/enums/language";
import { last } from "rxjs/operators";

export class ProfileDetailPrivate extends ProfileDetail {
    constructor(id: Guid, userName: string, gender: Gender, age: number, profilePicture: Picture, location: string, tags: string[], languages: Language[], 
        orientation: Orientation, status: RelationshipStatus, height: number, wantsToChat: boolean, wantsToTradePics: boolean, wantsToMeetIRL: boolean,
        lastOnline: string, tokensToAccessFullProfile: number, numberOfPublicBlogPosts: number, numberOfPrivateBlogPosts: number, aboutMe: string,
        myInterests: string, numberOfPrivatePictures: number, publicPictures: Picture[], public privatePictures: Picture[], public privateTags: string[]) {
            super(id, userName, gender, age, profilePicture, location, tags, languages, orientation, status, height, wantsToChat, wantsToTradePics, wantsToMeetIRL,
            lastOnline, tokensToAccessFullProfile, numberOfPublicBlogPosts, numberOfPrivateBlogPosts, aboutMe, myInterests, numberOfPrivatePictures, publicPictures);
        }

    get isPrivate() : boolean {
        return true;
    }
}