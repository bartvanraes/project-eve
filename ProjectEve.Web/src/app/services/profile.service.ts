import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { BaseService } from './base.service';
import { ProfileDetail } from '../models/profile-detail';
import { ProfileOverviewElement } from '../models/profile-overview-element';
import { Guid } from '../utilities/guid';

@Injectable()
export class ProfileService extends BaseService {
    private profilesUrl = "api/profiles";

    constructor(
        private http: HttpClient,
        messageService: MessageService) { 
            super(messageService); 
        }

    getProfiles(): Observable<ProfileOverviewElement[]> {
        //return this.http.get<ProfileOverviewElement[]>(this.profileService);
        return this.http.get<ProfileOverviewElement[]>(this.profilesUrl)
            .pipe(
                tap(profiles => this.log('fetched profiles')),
                catchError(this.handleError('getProfiles', []))
            );            
    }

    /** GET ProfileDetail by id. Return `undefined` when id not found */
    getProfileNo404<Data>(id: number): Observable<ProfileDetail> {
        const url = `${this.profilesUrl}/?id=${id}`;
        return this.http.get<ProfileDetail[]>(url)
        .pipe(
            map(profiles => profiles[0]), // returns a {0|1} element array
            tap(h => {
                const outcome = h ? `fetched` : `did not find`;
                this.log(`${outcome} profile id=${id}`);
            }),
            catchError(this.handleError<ProfileDetail>(`getProfile id=${id}`))
        );
    }

    /** GET ProfileDetail by id. Will 404 if id not found */
    getProfile(id: Guid): Observable<ProfileDetail> {
        const url = `${this.profilesUrl}/${id.ToString()}`;
        return this.http.get<ProfileDetail>(url).pipe(
            tap(_ => this.log(`fetched profile id=${id.ToString()}`)),
            catchError(this.handleError<ProfileDetail>(`getProfile id=${id.ToString()}`))
        );
    }

    /** GET ProfileDetail by name. Will 404 if id not found */
    getProfileByName(name: string): Observable<ProfileDetail> {
        const url = `${this.profilesUrl}/name/${name}`;
        return this.http.get<ProfileDetail>(url).pipe(
            tap(_ => this.log(`fetched profile name=${name}`)),
            catchError(this.handleError<ProfileDetail>(`getProfile name=${name}`))
        );
    }
   

    
}
