import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProfileService } from "../../../services/profile.service";
import { ProfileDetail } from "../../../models/profile-detail";
import { Location } from "@angular/common";
import { OrientationConverter } from "../../../shared/enum-converters/orientation-converter";
import { GenderConverter } from "../../../shared/enum-converters/gender-converter";
import { RelationshipStatusConverter } from "../../../shared/enum-converters/relationship-status-converter";
import { LanguageConverter } from "../../../shared/enum-converters/language-converter";
import { Gender } from "../../../shared/enums/gender";
import { ProfileDetailPrivate } from "../../../models/profile-detail-private";

@Component({
    selector: 'profile-detail',
    templateUrl: './profile-detail.component.html',
    styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
    //@Input() profile: ProfileDetail;
    public profile: ProfileDetail;
    public orientationTranslation: string;
    public genderTranslation: string;
    public relationshipStatusTranslation: string;
    public translatedLanguages: string[];

    public him_her: string;
    public his_her: string;
    public isPrivate: boolean;


    constructor(
        private route: ActivatedRoute,
        private profileService: ProfileService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getProfile();        
    }

    getProfile(): void {
        // the name is giving instead of id and it should be unique
        const name = this.route.snapshot.paramMap.get('id');
        this.profileService.getProfileByName(name)
            .subscribe(profile => {
                this.profile = profile;
                this.orientationTranslation = OrientationConverter.convert(profile.orientation);
                this.genderTranslation = GenderConverter.convert(profile.gender);
                this.relationshipStatusTranslation = RelationshipStatusConverter.convert(profile.status);
                this.translatedLanguages = [];
                profile.languages.forEach(lang => {
                    this.translatedLanguages.push(LanguageConverter.convert(lang));
                })

                switch(profile.gender) {
                    case Gender.Male:
                        this.him_her = "him";
                        this.his_her = "his";
                        break;
                    case Gender.Female:
                        this.him_her = "her";
                        this.his_her = "her";
                        break;
                    case Gender.Couple:
                    case Gender.CoupleMF:
                    case Gender.CoupleMM:
                        this.him_her = "them";
                        this.his_her = "their";
                        break;
                    case Gender.Trans:
                        this.him_her = profile.userName; //what other options do we have?
                        this.his_her = profile.userName + '\'s';
                        break;
                }   
                
                this.isPrivate = profile.isPrivate;
                
            });

    }

    goBack(): void {
        this.location.back();
    }

}