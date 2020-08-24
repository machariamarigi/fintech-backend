import { Users } from "./user.entity";

export const UserProviders = {
    provide: 'USERS_REPOSITORY',
    useValue: Users
}
