import { Schema, model} from 'mongoose'
import { TUser, TUserAddress, TUserFullName, TUserModel,  } from './user.interface'
import bcrypt from 'bcryptjs'

const userNameSchema = new Schema<TUserFullName>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const userAddressSchema = new Schema<TUserAddress>({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

const userOrderSchema = new Schema({
    productName: {
        type: String,
    },
    price:{
        type: Number,
    },
    quantity: {
        type : Number,
    }
})

 const userSchema = new Schema<TUser , TUserModel>({
   userId:{
    type: Number,
    unique: true,
    required: true

   },
   userName: {
    type:String,
    unique: true,
    required: true
   },
   password: {
    type : String,
    required : true
   },
   fullName: userNameSchema,
   age: {
    type: Number,
    required: true
   },
   email: {
    type: String,
    required: true
   },
   isActive: {
    type : Boolean,
    required: true
   },
   hobbies: {
    type: [String],
    required: true
   },
   address: userAddressSchema,
   orders: {
type:[userOrderSchema]}

}) 
userSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await UserModel.findOne({id  });
    return existingUser;
  };
userSchema.pre("save", function (next){
    const password = this.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    this.password = hashedPassword
    next()
})
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
  });

export const UserModel = model<TUser, TUserModel>('User', userSchema)