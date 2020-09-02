import { TableOptions, Table, Model, Column, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { Users } from "../users/users.entity";

const tableOptions: TableOptions = {
    timestamps: true,
    tableName: 'Accounts'
} as TableOptions

@Table(tableOptions)
export class Accounts extends Model<Accounts> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    })
    public id: number

    @Column({
        type: DataType.CHAR(200),
        allowNull: false
    })
    public Type: string

    @Column({
        type: DataType.CHAR(200),
        allowNull: false
    })
    public Name: string

    @Column({
        type: DataType.FLOAT,
        allowNull: true
    })
    public Balance: number

    @ForeignKey(() => Users)
    public UserId: number

    @BelongsTo(() => Users, {
        as: 'Users',
        foreignKey: 'UserId',
        targetKey: 'id'
    })
    public Users: Users

    @CreatedAt
    public createdAt: Date

    @UpdatedAt
    public updatedAt: Date
}
