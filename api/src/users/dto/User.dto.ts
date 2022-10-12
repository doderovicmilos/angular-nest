import { UserRoles } from "../entities/users/userRoles";

export class UserDto {
    username: string;   

    roles: UserRoles[];
}