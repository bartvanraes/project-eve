//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileOverviewComponent } from './overview/profile-overview.component';
import { ProfileOverviewElementComponent } from './overview-element/profile-overview-element.component';
import { ProfileService } from '../../services/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientSidePagination } from '../../utilities/client-side-pagination';

@NgModule({
  declarations: [
    ProfileOverviewComponent,
    ProfileOverviewElementComponent
  ],
  imports: [ 
      BrowserModule,
      AppRoutingModule,
      HttpClientModule      
    ],
    exports: [
        ProfileOverviewComponent,
        ProfileOverviewElementComponent
    ],
  providers: [ProfileService, ClientSidePagination]
})
export class ProfileModule { }