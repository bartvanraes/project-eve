import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BaseService } from './base.service';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Guid } from '../utilities/guid';


@Injectable()
export class UserService extends BaseService {
    private usersUrl = "api/users";
    private currentUser = null;

    constructor(private http: HttpClient,
        messageService: MessageService) {
        super(messageService)
     }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl)
            .pipe(
                tap(users => this.log('fetched users')),
                catchError(this.handleError('getAll', []))
            ); 
    }

    getUser(id: Guid): Observable<User> {
        //return this.http.get(this.usersUrl + '/' + id);

        //TEMP SOLUTION FOR MOCKS
        /*let currentUser = this.getUsers().pipe(
            map(users => users[0]), // returns a {0|1} element array
            tap(h => {
                const outcome = h ? `fetched` : `did not find`;
                this.log(`${outcome} user name=${id}`);
            }),
            catchError(this.handleError<User>(`login name=${id}`))
        );


        return currentUser;*/
        //END TEMP


        let idStr = id.ToString();

        const url = `${this.usersUrl}/${idStr}`;
        return this.http.get<User>(url).pipe(
            tap(_ => this.log(`fetched user id=${idStr}`)),
            catchError(this.handleError<User>(`getUser id=${idStr}`))
        );
    }

    //TEMP SOLUTION
    /*login(userName: string, password: string): Observable<User> {
        //TEST

        this.currentUser = this.getAll().pipe(
            map(users => users[0]), // returns a {0|1} element array
            tap(h => {
                const outcome = h ? `fetched` : `did not find`;
                this.log(`${outcome} user name=${userName}`);
            }),
            catchError(this.handleError<User>(`login name=${userName}`))
        );


        return this.currentUser;*/

        /*map(profiles => profiles[0]), // returns a {0|1} element array
            tap(h => {
                const outcome = h ? `fetched` : `did not find`;
                this.log(`${outcome} profile id=${id}`);
            }),
            catchError(this.handleError<ProfileDetail>(`getProfile id=${id}`))*/
    /*}

    logout() : void {
        this.currentUser = null;
    }*/

    createUser(user: User) {
        return this.http.post(this.usersUrl, user);
    }

    updateUser(user: User) {
        return this.http.put(this.usersUrl + '/' + user.id, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.usersUrl + '/' + id);
    }

    /*isAuthenticated() {
        return this.currentUser != null;
    }*/
}