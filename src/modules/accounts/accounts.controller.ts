import { Controller, Post, Body, HttpException, HttpStatus } from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { IAccount } from "./accounts.interface";

@Controller('accounts')
export class AccountsController {
    constructor(
        private accountsService: AccountsService
    ) {}

    @Post('create-account')
    public async registor(@Body() UserId: number): Promise<IAccount> {
        const result: any = await this.accountsService.create(UserId)

        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST)
        }

        return result
    }
}
