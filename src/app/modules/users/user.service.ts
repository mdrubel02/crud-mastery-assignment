import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (userData: TUser): Promise<TUser | null> => {
  const result = await UserModel.create(userData);
  return result;
 
};

const getAllUserIntoDB = async () => {
  const result = await UserModel.find({}).select({
    userName: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
    hobbies: 1,
    _id: 0,
  });
  return result;
};
const getSingleUserIntoDB = async (id: string): Promise<TUser | null> => {
  if(await !UserModel.isUserExists(id)){
    throw new Error("User not found")
  }
  const result = await UserModel.findById(id).select({
    userId: 1,
    userName: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
    hobbies: 1,
    _id: 0,
  });
  return result;
};
const updateUser = async (id: string, userData: TUser): Promise<TUser | null> => {
  if(await !UserModel.isUserExists(id)){
    throw new Error("User not found")
  }
  const result = await UserModel.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteUser = async (id: string): Promise<TUser | null> => {
  if(await !UserModel.isUserExists(id)){
    throw new Error("User not found")
  }
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};
const getUserOrder = async (id: string) => {
  if(await !UserModel.isUserExists(id)){
    throw new Error("User not found")
  }
  const result = await UserModel.findById(id).select({ orders: 1, _id: 0 });
  return result;
};
const updateUserOrders = async (id: string , orderData: TUser)=>{
  if(await !UserModel.isUserExists(id)){
    throw new Error("User not found")
  }
    const result = await UserModel.findByIdAndUpdate(id, orderData, {
        new: true,
        runValidators: true
    })
    return result
}
const ordersTotalCost = async (id:string)=>{
  if(await !UserModel.isUserExists(id)){
    throw new Error("User not found")
  }
  const singleUser = await UserModel.findById(id);
  const result = await UserModel.aggregate([
    {
      $match: {
        userId: singleUser?.userId
      }
    },
    {
      $unwind: "$orders"
    },
    {
      $group: {
        _id: "$userId",
        totalPrice: { $sum: { $multiply: ["$orders.price", "$orders.quantity"] } }
      }
    },
    {
      $project : {totalPrice: 1}
    }
  ])
  return result;
}
export const UserServices = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserIntoDB,
  updateUser,
  deleteUser,
  getUserOrder,
  updateUserOrders,
  ordersTotalCost
};
