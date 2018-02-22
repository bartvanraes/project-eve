import { Component, OnInit } from '@angular/core';

import { ProfileOverviewElement } from '../../../models/profile-overview-element';
import { ProfileService } from '../../../services/profile.service';
import { ClientSidePagination } from '../../../utilities/client-side-pagination';
import { Guid } from '../../../utilities/guid';

@Component({
    selector: 'profile-overview',
    templateUrl: './profile-overview.component.html',
    styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {
    // array of all the profiles to be paged
    private allProfiles: ProfileOverviewElement[];

    // pager object
    pager: any = {}

    // paged items
    profiles: ProfileOverviewElement[];

    constructor(private profileService: ProfileService, private clientSidePagination: ClientSidePagination) {}

    ngOnInit() {
        this.getProfiles()
    }

    getProfiles(): void {       

        this.profileService.getProfiles()
        .subscribe(profiles => {
            this.allProfiles = profiles;

            this.setPage(1);
        });
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.clientSidePagination.getPager(this.allProfiles.length, page);
 
        // get current page of items
        this.profiles = this.allProfiles.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}