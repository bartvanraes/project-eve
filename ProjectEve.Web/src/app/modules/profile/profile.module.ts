//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileOverviewComponent } from './overview/profile-overview.component';
import { ProfileOverviewElementComponent } from './overview-element/profile-overview-element.component';
import { ProfileService } from '../../services/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientSidePagination } from '../../utilities/client-side-pagination';
import { PagingComponent } from '../common/paging/paging.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from '../../guards/auth.guard';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProfileOverviewComponent,
    ProfileOverviewElementComponent,
    PagingComponent
  ],
  imports: [ 
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NgbModule,
      CommonModule
    ],
    exports: [
        ProfileOverviewComponent,
        ProfileOverviewElementComponent
    ],
  providers: [
    ProfileService, 
    ClientSidePagination,
    AuthGuard]
})
export class ProfileModule { }