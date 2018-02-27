import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './modules/common/login-dialog/login-dialog.component';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { User } from './models/user';
import { Guid } from './utilities/guid';
import { UserRole } from './shared/enums/user-role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;
  password: string;
  

  currentUser: User;

  constructor(public dialog: MatDialog, 
              private userService: UserService, 
              private authenticationService: AuthenticationService,
              private router:Router) {
                //TEST
                //this.currentUser = {id: Guid.newGuid(), name: 'Johnny', role: UserRole.Standard, numberOfNotifications: 12, numberOfMessages: 3, tokens: 123};
              }

  openLoginDialog(): void {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: { userName: this.userName, password: this.password }
    });

    dialogRef.componentInstance.onLoginSuccessful.subscribe(result => {
      this.login(result);
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    

      //Temp solution for mocked data
      /*this.userService.login(this.userName, this.password)
      .subscribe(result => {
        this.currentUser = result;
        this.router.navigate(['home']);
      });*/

      

      //When the backend is ready, use this instead
      /*this.authenticationService.login(this.userName, this.password)
      .subscribe(result => {
        let test = '';
      });*/
        
    })
  }

  login(successful: boolean) {
    let userId = Guid.parse(JSON.parse(localStorage.getItem('currentUser')).id.guid);    

    this.userService.getUser(userId).subscribe(user => {
        this.currentUser = user
      });
  }

  logout() {
    this.authenticationService.logout();
    this.currentUser = null;
  }
}
