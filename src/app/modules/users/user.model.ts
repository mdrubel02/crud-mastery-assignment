import { Schema, model } from 'mongoose';
import { User, UserAddress, UserFullName } from './user.interface';

const userNameSchema = new Schema<UserFullName>({
  firstName: {
    type: String,
    required: true,
  },
  lastNmae: {
    type: String,
    required: true,
  },
});

const userAddressSchema = new Schema<UserAddress>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const userOrderSchema = new Schema({
  productNmae: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    unique: true,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  fullName: userNameSchema,
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  address: userAddressSchema,
  orders: { type: [userOrderSchema] },
});

export const UserModel = model<User>('User', userSchema);
