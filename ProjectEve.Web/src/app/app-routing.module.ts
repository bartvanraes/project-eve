import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './modules/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileDetailComponent } from './modules/profile/detail/profile-detail.component';

const routes: Routes = [
    { path: '', 
      redirectTo: '/home', 
      pathMatch: 'full' 
    },
    { path: 'home', 
      component: HomeComponent 
    },
    { path: 'profile/:id', 
      component: ProfileDetailComponent,
      canActivate: [AuthGuard], 
    }
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}