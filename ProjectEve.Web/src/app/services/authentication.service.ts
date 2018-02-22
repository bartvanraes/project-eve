import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { MessageService } from './message.service';
import { BaseService } from './base.service';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService extends BaseService {
    public token: any; //string
    private authenticateUrl = '/api/authenticate';

    constructor(private http: HttpClient,
        messageService: MessageService) {
            super(messageService);
            // set token if saved in local storage
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.token = currentUser && currentUser.token;
         }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.authenticateUrl, { username: username, password: password })
            .map((response: any) => {
                // login successful if there's a jwt token in the response
                let token = response.token; //&& response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ id: response.id, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}