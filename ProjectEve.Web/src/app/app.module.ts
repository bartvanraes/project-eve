import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileModule } from './modules/profile/profile.module';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './services/message.service';
import { HomeComponent } from './modules/home/home.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],  
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
