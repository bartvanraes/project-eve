import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Guid } from '../utilities/guid';
import { Gender } from '../shared/enums/gender';
import { UserRole } from '../shared/enums/user-role';
import { MockedData } from './mocked-data/mocked-data';


export class InMemoryDataService implements InMemoryDbService {
 
  createDb() {   

    let profiles = MockedData.PROFILES;
    let users = MockedData.USERS;
    
    return {profiles, users};
  }
}
