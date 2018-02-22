import { Component, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AuthenticationService } from "../../../services/authentication.service";

@Component({
    selector: 'login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.css']
  })
  export class LoginDialogComponent {
  
    loading = false;
    error = '';
    @Output() onLoginSuccessful = new EventEmitter<boolean>();

    constructor(
      public dialogRef: MatDialogRef<LoginDialogComponent>,
      private authenticationService: AuthenticationService,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
        //this.data.successful = false;
        this.dialogRef.close();
    }

    onConfirm(): void {
        this.loading = true;
        this.authenticationService.login(this.data.userName, this.data.password)
            .subscribe(result => {
                if (result === true) {
                    //this.data.successful = true;
                    this.onLoginSuccessful.emit(true);
                    this.dialogRef.close();
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
  
  }