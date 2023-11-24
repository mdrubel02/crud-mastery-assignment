import { User } from "./user.interface"
import { UserModel } from "./user.model"



const createUserIntoDB = async (user : User)=>{
    const result=  await UserModel.create(user)
    return result
 }

const getAllUserIntoDB =async () => {
    const result = await UserModel.find({})
    return result;
}
const getSingleUserIntoDB =async (id:string) => {
    const result = await UserModel.findById(id);
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