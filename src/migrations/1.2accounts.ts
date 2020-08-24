import Sequelize from "sequelize"

import { QueryInterface } from '../interfaces'

const tableName = 'Accounts'

export async function up(i: QueryInterface): Promise<any> {
    const queryInterface = i.getQueryInterface() as Sequelize.QueryInterface;
    queryInterface.createTable(tableName, {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        Type: {
            type: Sequelize.CHAR(200),
            allowNull: false,
        },
        Name: {
            type: Sequelize.CHAR(50),
            allowNull: false,
        },
        Balance: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        UserId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    });
};

export async function down(i: QueryInterface): Promise<any> {
    const queryInterface = i.getQueryInterface() as Sequelize.QueryInterface;

    queryInterface.dropTable(tableName)
}
