import { Module } from '@nestjs/common';
import { UsersProviders } from './user.provider';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';

@Module({
    controllers: [UsersController],
    providers: [
        UsersProviders,
        UsersService
    ],
    exports: [
        UsersProviders,
        UsersService
    ]
})
export class UserModule {}
