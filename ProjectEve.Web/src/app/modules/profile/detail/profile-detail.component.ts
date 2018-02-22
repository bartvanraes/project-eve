import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProfileService } from "../../../services/profile.service";
import { ProfileDetail } from "../../../models/profile-detail";
import { Location } from "@angular/common";

@Component({
    selector: 'profile-detail',
    templateUrl: './profile-detail.component.html',
    styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
    @Input() profile: ProfileDetail;

    constructor(
        private route: ActivatedRoute,
        private profileService: ProfileService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getProfile();
    }

    getProfile(): void {
        // the name is giving instead of id and it should be unique
        const name = this.route.snapshot.paramMap.get('id');
        this.profileService.getProfileByName(name)
            .subscribe(profile => this.profile = profile);

    }

    goBack(): void {
        this.location.back();
    }

}