import { Component, OnInit } from '@angular/core';

import { ProfileOverviewElement } from '../../models/profile-overview-element';
import { ProfileService } from '../../services/profile.service';

@Component({
    selector: 'profile-overview',
    templateUrl: './profile-overview.component.html',
    styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {
    profiles: ProfileOverviewElement[];

    constructor(private profileService: ProfileService) {}

    ngOnInit() {
        this.getProfiles()
    }

    getProfiles(): void {
        this.profileService.getProfiles()
        .subscribe(profiles => this.profiles = profiles)
    }

}