import { Guid } from "../utilities/guid";
import { UserRole } from "../shared/enums/user-role";

export class User {
    id: Guid;
    name: string;
    role: UserRole;
    numberOfNotifications: number;
    numberOfMessages: number;
    tokens: number;
    token: string;
}