import { Sequelize } from 'sequelize-typescript';

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '',
                database: 'fintechnest'
            })

            sequelize.addModels([])

            return sequelize
        }
    }
]
