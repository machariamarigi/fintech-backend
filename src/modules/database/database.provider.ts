import { Sequelize } from 'sequelize-typescript';
import { Users } from '../user/user.entity';

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.DB_HOST,
                port: 5432,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
            })

            sequelize.addModels([Users]);

            return sequelize
        }
    }
]
