import { TableOptions, Table, Model, Column, DataType, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { NextFunction } from "express";

const tableOptions: TableOptions = { timestamps: true, tableName: 'Users' } as TableOptions

@Table(tableOptions)
export class Users extends Model<Users> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public id: number

    @Column({
        type: DataType.CHAR(200),
        allowNull: false,
    })
    public Username: string

    @Column({
        type: DataType.CHAR(50),
        allowNull: false,
        validate: {
            isEmail: true,
            isUnique: async (value: string, next: NextFunction): Promise<any> => {
              const exists = await Users.findOne({ where: { Email: value } })
              if (exists) {
                const error = new Error('This email is already used.')
                next(error)
              }
              next()
            }
          }
    })
    public Email: string

    @Column({
        type: DataType.CHAR(250),
        allowNull: false,
    })
    public Password: string

    @Column({
        type: DataType.CHAR(250),
        allowNull: true,
    })
    public Salt: string

    @CreatedAt
    public createdAt: Date

    @UpdatedAt
    public updatedAt: Date
}
