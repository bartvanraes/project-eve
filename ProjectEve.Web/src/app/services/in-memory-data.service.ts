import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Guid } from '../utilities/guid';
import { Gender } from '../shared/enums/gender';
import { UserRole } from '../shared/enums/user-role';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const profiles = [
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
    ];
    const users = [
      {id: Guid.parse('8aacad04-e19e-4eee-afcf-59879d3e572c'), name: 'Johnny', role: UserRole.Standard, numberOfNotifications: 12, numberOfMessages: 3, tokens: 123, token: ''}
    ]

    const authenticate = [
      {username: 'Johnny', token: '123456'}
    ]
    return {profiles, users};
  }
}
