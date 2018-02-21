import { Guid } from "../utilities/guid";

export class User {
    id: Guid;
    name: string;
    isAuthenticated: boolean;
}