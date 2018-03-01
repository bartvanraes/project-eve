import { ProfileOverviewElement } from "../../models/profile-overview-element";
import { Guid } from "../../utilities/guid";
import { Gender } from "../../shared/enums/gender";
import { User } from "../../models/user";
import { UserRole } from "../../shared/enums/user-role";
import { ProfileDetail } from "../../models/profile-detail";
import { RelationshipStatus } from "../../shared/enums/relationship-status";
import { Orientation } from "../../shared/enums/orientation";
import { Language } from "../../shared/enums/language";
import { ProfileDetailPrivate } from "../../models/profile-detail-private";
import { Picture } from "../../models/picture";

export class MockedData {
    public static PROFILES: ProfileOverviewElement[] = [
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor1', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita1', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor2', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita2', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor3', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita3', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor4', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita4', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor5', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita5', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor6', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita6', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor7', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita7', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor8', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita8', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor9', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita9', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor10', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita10', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor11', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita11', 40, Gender.Female, 'USA', './assets/images/female-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Emperor12', 36, Gender.Male, 'Belgium', './assets/images/male-test.jpg'),
      new ProfileOverviewElement(Guid.newGuid(), 'Anita12', 40, Gender.Female, 'USA', './assets/images/female-test.jpg')
    ]
    

    public static PROFILE_DETAIL: ProfileDetail[] = [
      new ProfileDetail(Guid.newGuid(), 'Emperor1', Gender.Male, 36, new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'), 
      'Belgium', ['Metalhead', 'Gamer', 'Traveller'], [Language.English, Language.Dutch], Orientation.Straight, RelationshipStatus.Single, 178, true, true, true,
      '2018-02-23T18:25:43.511Z', 20, 8, 2, 'Here comes a long description of what I\'m doing on this website \n\n With a lot of text spread over multiple paragraphs.',
      'All the weird and nerdy stuff comes here.', 6, 
      [
        new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'),
        new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'),
        new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg')
      ])      
    ];

    public static PROFILE_DETAIL_PRIVATE: ProfileDetailPrivate[] = [
      new ProfileDetailPrivate(Guid.newGuid(), 'Emperor1',  Gender.Male, 36, new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'), 
      'Belgium', ['Metalhead', 'Gamer', 'Traveller'], [Language.English, Language.Dutch], Orientation.Straight, RelationshipStatus.Single, 178, true, true, true,
      '2018-02-23T18:25:43.511Z', 20, 8, 2, 'Here comes a long description of what I\'m doing on this website \n\n With a lot of text spread over multiple paragraphs.',
      'All the weird and nerdy stuff comes here.', 6, 
      [
        new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'),
        new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'),
        new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg')
      ],
      [new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'),
      new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'),
      new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'),
      new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'),
      new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg'),
      new Picture(Guid.newGuid(), './assets/images/male-test.jpg', './assets/images/male-test.jpg')],
      ['Crazy', 'Insane']
    ) 
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