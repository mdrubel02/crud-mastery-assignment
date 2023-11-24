import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createUser = async (req : Request, res : Response)=>{
    const {user: userData} = req.body
    console.log(userData)
    //will call service fun to send this data
    try {
        const result = await UserServices.createUserIntoDB(userData)
        //send response
        res.status(200).json({
            success: true,
            message: 'User created succesfully!',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

const getUser =async (req: Request, res : Response ) => {
    try {
        const result = await UserServices.getAllUserIntoDB()
        res.status(200).json({
            success: true,
            message: "User fetched successfully!",
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}
const getSingleUser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const result = await UserServices.getSingleUserIntoDB(id)
      res.status(200).json({
        status: 'success',
        message: 'Single user fetched successfully',
        data: result,
      })
    } catch (error ) {
      console.log(error)
    }
  }
const updateUser = async (req: Request, res: Response) => {
    try {
      const tourData = req.body
      const id = req.params.id
      const result = await UserServices.updateUser(id, tourData)
      res.status(200).json({
        status: 'success',
        message: 'User updated successfully',
        data: result,
      })
    } catch (error) {
      console.log(error)
    }
  }

export const UserController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser
}