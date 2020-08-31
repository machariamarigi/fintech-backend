import { Controller, Post, Body, HttpException, HttpStatus } from "@nestjs/common";
import { UsersService } from "./user.service";
import { IUser } from "./user.interface";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('register')
    public async register(@Body() user: IUser): Promise<any> {
        const result: any = await this.userService.create(user,)

        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST)
        }
        return result
    }
}
