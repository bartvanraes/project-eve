import { Gender } from "../enums/gender";

export class GenderConverter {
    public static convert(gender: Gender): string {
        switch (gender) {
            case Gender.Male:
                return "Man";
            case Gender.Female:
                return "Woman";
            case Gender.Couple:
            case Gender.CoupleMF:
            case Gender.CoupleMM:
                return "Couple";
            case Gender.Trans:
                return "Trans";
        } 

        
    }
}