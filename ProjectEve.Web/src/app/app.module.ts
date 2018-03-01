import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileModule } from './modules/profile/profile.module';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './services/message.service';
import { HomeComponent } from './modules/home/home.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service'
import { ClientSidePagination } from './utilities/client-side-pagination';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { Overlay } from '@angular/cdk/overlay';
import { LoginDialogComponent } from './modules/common/login-dialog/login-dialog.component';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { ProfileDetailComponent } from './modules/profile/detail/profile-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { fakeBackendProvider } from './services/fake-backend';
import { JwtInterceptor } from './services/helpers/jwt-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { KeyPipe } from './utilities/pipes/key-pipe';

/*All this just for Dialogs? Review it!*/
@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class MaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileDetailComponent,
    LoginDialogComponent,
    KeyPipe
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AppRoutingModule,
    MaterialModule, 
    BrowserAnimationsModule, 
    FormsModule,  
    NgbModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],  
  providers: [
    MessageService, 
    ClientSidePagination,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    AuthenticationService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    // providers used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, LoginDialogComponent]
})
export class AppModule { }
