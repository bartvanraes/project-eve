import { Component, Input } from '@angular/core';
import { ProfileOverviewElement } from '../../../models/profile-overview-element';



@Component({
    selector: 'profile-overview-element',
    templateUrl: './profile-overview-element.component.html',
    styleUrls: [ './profile-overview-element.component.css' ]
  })
  export class ProfileOverviewElementComponent {
    @Input() profile: ProfileOverviewElement;
  }