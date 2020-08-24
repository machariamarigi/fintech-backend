import Sequelize from "sequelize"

import { QueryInterface } from '../interfaces'

const tableName = 'Users'

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
        Username: {
            type: Sequelize.CHAR(200),
            allowNull: false,
        },
        Email: {
            type: Sequelize.CHAR(50),
            allowNull: false,
        },
        Password: {
            type: Sequelize.CHAR(250),
            allowNull: false,
        },
        Salt: {
            type: Sequelize.CHAR(250),
            allowNull: false,
        },
        createdOn: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        },
    });
};

export async function down(i: QueryInterface): Promise<any> {
    const queryInterface = i.getQueryInterface() as Sequelize.QueryInterface;

    queryInterface.dropTable(tableName)
}
