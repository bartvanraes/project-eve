import { RelationshipStatus } from "../enums/relationship-status";

export class RelationshipStatusConverter {
    public static convert(status : RelationshipStatus) : string {
        switch (status) {
            case RelationshipStatus.Single:
                return "Single";
            case RelationshipStatus.SeeingSomeone:
                return "Seeing someone";
            case RelationshipStatus.InRelationship:
                return "In a relationship";
            case RelationshipStatus.Complicated:
                return "It's complicated";
        }
    }
}