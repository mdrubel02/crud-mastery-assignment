import { User } from "./user.interface"
import { UserModel } from "./user.model"



const createUserIntoDB = async (user : User)=>{
    console.log(user, 'service')
    const result=  await UserModel.create(user)
    console.log(result, 'after service')
    return result
 }

const getAllUserIntoDB =async () => {
    const result = await UserModel.find({})
    .select({userName: 1, fullName: 1, age: 1,email: 1, address: 1,hobbies:1, _id:0})
    return result;
}
const getSingleUserIntoDB =async (id:string):Promise<User | null> => {
    const result = await UserModel.findById(id).select({userId:1,userName: 1, fullName: 1, age: 1,email: 1, address: 1,hobbies:1, _id:0})
    return result
}
const updateUser =async (id: string, userData: User):Promise<User | null> => {
    const result = await UserModel.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators: true,
      })
      return result
}
const deleteUser = async (id: string): Promise<User | null> => {
    const result = await UserModel.findByIdAndDelete(id)
    return result
  }
 export const UserServices = {
    createUserIntoDB,
    getAllUserIntoDB,
    getSingleUserIntoDB,
    updateUser,
    deleteUser
}