import { Module } from '@nestjs/common';
import { UsersProviders } from './users.provider';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

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
