import { Sequelize } from 'sequelize-typescript';

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

            sequelize.addModels([])

            return sequelize
        }
    }
]
