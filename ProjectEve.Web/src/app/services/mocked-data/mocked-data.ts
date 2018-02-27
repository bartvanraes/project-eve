import { ProfileOverviewElement } from "../../models/profile-overview-element";
import { Guid } from "../../utilities/guid";
import { Gender } from "../../shared/enums/gender";
import { User } from "../../models/user";
import { UserRole } from "../../shared/enums/user-role";
import { ProfileDetail } from "../../models/profile-detail";
import { RelationshipStatus } from "../../shared/enums/relationship-status";
import { Orientation } from "../../shared/enums/orientation";
import { Language } from "../../shared/enums/language";

export class MockedData {
    public static PROFILES: ProfileOverviewElement[] = [
      { id: Guid.newGuid(), userName: 'Emperor1', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita1', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor2', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita2', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor3', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita3', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor4', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita4', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor5', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita5', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor6', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita6', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor7', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita7', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor8', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita8', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor9', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita9', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor10', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita10', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor11', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita11', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' },
      { id: Guid.newGuid(), userName: 'Emperor12', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg' },
      { id: Guid.newGuid(), userName: 'Anita12', age: 40, gender: Gender.Female, location: 'USA', thumbnailUrl: './assets/images/female-test.jpg' }
    ]

    public static PROFILE_DETAIL: ProfileDetail[] = [
      { id: Guid.newGuid(), userName: 'Emperor1', age: 36, gender: Gender.Male, location: 'Belgium', thumbnailUrl: './assets/images/male-test.jpg', 
      orientation: Orientation.Straight, status: RelationshipStatus.Single, height: 178, wantsToChat: true, wantsToTradePics: true, wantsToMeetIRL: true, 
      lastOnline: '2018-02-23T18:25:43.511Z', tags: ['Metalhead', 'Gamer', 'Traveller'], languages: [Language.English, Language.Dutch], tokensToAccessFullProfile: 20,
      numberOfPublicBlogPosts: 8, numberOfPrivateBlogPosts: 2, 
      aboutMe: 'Here comes a long description of what I\'m doing on this website \n\n With a lot of text spread over multiple paragraphs.',
      myInterests: 'All the weird and nerdy stuff comes here.' }
    ]

    /*id: Guid;
    userName: string;
    gender: Gender;
    age: number;
    thumbnailUrl: string;
    location: string;
    tags: string[];
    orientation: string;
    status: string;
    height: number;
    wantsToChat: boolean;
    wantsToTradePics: boolean;
    wantsToMeetIRL: boolean;
    lastOnline: Date;*/

    public static USERS: User[] = [
      {id: Guid.parse('8aacad04-e19e-4eee-afcf-59879d3e572c'), name: 'Johnny', role: UserRole.Standard, numberOfNotifications: 12, numberOfMessages: 3, tokens: 123, token: ''}
  ]
}