import mongoose from 'mongoose'

import UserSchema from './User.Model'
import {IUser} from "../Interfaces/User.Interface"
const Schema = mongoose.Schema

const createSchema = (schema:Object) => {
  const model = new Schema(schema, { timestamps: true })
  return model
}

const User = mongoose.model<IUser>('User', createSchema(UserSchema))

export {
  User,
}
