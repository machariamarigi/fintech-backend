import { Injectable, Inject } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';
import { Users } from "./users.entity";
import { IUser } from "./users.interface";
import { jwtConfig } from "src/config/jwtConfig";

import crypto = require('crypto');

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY') private usersRepisotory: typeof Users
    ) {}

    public async create(user: IUser): Promise<any> {
        const exists = await Users.findOne({ where: { Email: user.Email } })
    
        if(exists) {
            throw new Error('This email has already been used')
        } else {
            user.Salt = crypto.randomBytes(128).toString('base64')
            user.Password = crypto.createHmac('sha256', user.Password + user.Salt).digest('hex')
            const newUser: any = await this.usersRepisotory.create<Users>(user)
            const jwtToken = jwt.sign(user, process.env.JWT_KEY, jwtConfig)
            newUser.Token = jwtToken
            return newUser
        }
    }
}
