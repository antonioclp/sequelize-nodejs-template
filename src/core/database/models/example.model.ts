import { DataTypes, ModelDefined, Optional } from 'sequelize'
import db from '@configuration/sequelize'
import { IExample } from '@interfaces/index'

export type ExampleInputtableFields = Optional<IExample, 'id'>

type ExampleSequelizeModelCreator =
ModelDefined<IExample, ExampleInputtableFields>

const ExampleModel: ExampleSequelizeModelCreator = db.define('Example', {
  name: DataTypes.STRING,
}, {
  tableName: 'Example',
  timestamps: false,
  underscored: true,
})

export default ExampleModel
