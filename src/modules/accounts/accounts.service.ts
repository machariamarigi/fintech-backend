import { Injectable, Inject } from "@nestjs/common";
import { Accounts } from "./accounts.entity";
import { IAccount } from "./accounts.interface";

@Injectable()
export class AccountsService {
    constructor(
        @Inject('ACCOUNTS_REPOSITORY')
        private accountsRepository: typeof Accounts
    ) {}
    public async create(UserId: number): Promise<IAccount> {
        const account = {
            Name: 'Account',
            Type: 'Personal Account',
            Balance: 100,
            UserId,
        }

        const newAccount: Promise<IAccount> = this.accountsRepository.create<Accounts>(account);
        return newAccount
    }
}
