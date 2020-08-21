import Sequelize from 'sequelize';

export interface QueryInterface { 
    getQueryInterface: () => Sequelize.QueryInterface; 
}