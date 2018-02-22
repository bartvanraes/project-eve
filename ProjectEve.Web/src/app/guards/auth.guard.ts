import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
	
  constructor(private userService: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
  	/*this.router.navigate(['/']);
  	console.log('You are not authenticated');
    return this.userService.isAuthenticated();*/

    if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
    }
    console.log('You are not authenticated');
    return false;
   }
}