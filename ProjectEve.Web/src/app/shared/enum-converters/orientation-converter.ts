import { Orientation } from "../enums/orientation";

export class OrientationConverter {
    public static convert(orientation: Orientation) : string {
        switch (orientation) {
            case Orientation.Straight:
                return "Straight";
            case Orientation.Bisexual:
                return "Bisexual";
            case Orientation.Gay:
                return "Gay";
        }
    }
}