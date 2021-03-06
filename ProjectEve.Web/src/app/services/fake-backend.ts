import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import { Guid } from '../utilities/guid';
import { UserRole } from '../shared/enums/user-role';
import { UserService } from './user.service';
import { User } from '../models/user';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';
import { MessageService } from './message.service';
import { MockedData } from './mocked-data/mocked-data';
 
@Injectable()
export class FakeBackendInterceptor extends BaseService implements HttpInterceptor {
    //user: User;
    constructor(private userService: UserService,
        messageService: MessageService) {
        super(messageService)
     }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered users
        //let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        
 
        // wrap in delayed observable to simulate server api call
        return Observable.of(null).mergeMap(() => {
 
            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                /*let filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });*/

                if(request.body.username == "test" && request.body.password == "test") {
                    let body = {id: Guid.parse('8aacad04-e19e-4eee-afcf-59879d3e572c'), name: 'Johnny', role: UserRole.Standard, numberOfNotifications: 12, numberOfMessages: 3, tokens: 123, token: 'fake-jwt-token'};
                 
                    return Observable.of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return Observable.throw('Username or password is incorrect');
                }
            }
 
            // get users
            /*if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Observable.of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Unauthorised');
                }
            }*/
 
            // get user by id
            if (request.url.match(/api\/users\/(.+)$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    /*let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;*/

                    //THIS DOESN'T WORK YET
                    /*return Observable.of(
                    this.userService.getUsers()
                    .subscribe(users => {
                        return new HttpResponse({status: 200, body: users[0] });
                        
                    }));*/

                    /*let currentUser = this.userService.getUsers().pipe(
                        map(users => users[0]), // returns a {0|1} element array
                        tap(h => {
                            const outcome = h ? `fetched` : `did not find`;    
                            this.log(outcome + ' first user');                        
                        }),
                        catchError(this.handleError<User>(`getUsers(..)`))
                    );*/
            
            
                    //return currentUser;
 
                    return Observable.of(new HttpResponse({ status: 200, body: MockedData.USERS[0] }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Unauthorised');
                }
            }

            // GET profile by id
            if (request.url.match(/api\/profiles\/(.+)$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                     
                    return Observable.of(new HttpResponse({ status: 200, body: MockedData.PROFILE_DETAIL_PRIVATE[0] }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Unauthorised');
                }
            }
 
            // create user
            /*if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                let newUser = request.body;
 
                // validation
                let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                if (duplicateUser) {
                    return Observable.throw('Username "' + newUser.username + '" is already taken');
                }
 
                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
 
                // respond 200 OK
                return Observable.of(new HttpResponse({ status: 200 }));
            }
 
            // delete user
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        let user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
 
                    // respond 200 OK
                    return Observable.of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Unauthorised');
                }
            }*/
 
            // pass through any requests not handled above
            return next.handle(request);
             
        })
 
        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .materialize()
        .delay(500)
        .dematerialize();
    }
}
 
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};