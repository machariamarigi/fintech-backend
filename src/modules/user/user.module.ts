import { Module } from '@nestjs/common';
import { UserProviders } from './user.provider';

@Module({
    providers: [UserProviders],
    exports: [
        UserProviders,
    ]
})
export class UserModule {}
