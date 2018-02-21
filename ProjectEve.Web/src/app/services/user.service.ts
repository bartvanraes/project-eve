import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { MessageService } from './message.service';


@Injectable()
export class UserService extends BaseService {
    private usersUrl = "api/users";

    constructor(private http: HttpClient,
        messageService: MessageService) {
        super(messageService)
     }

    getAll() {
        return this.http.get<User[]>(this.usersUrl);
    }

    getById(id: number) {
        return this.http.get(this.usersUrl + '/' + id);
    }

    create(user: User) {
        return this.http.post(this.usersUrl, user);
    }

    update(user: User) {
        return this.http.put(this.usersUrl + '/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.usersUrl + '/' + id);
    }
}