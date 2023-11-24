import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createUser = async (req : Request, res : Response)=>{
    const {user: userData} = req.body
    //will call service fun to send this data
    try {
        const result = await UserServices.createUserIntoDB(userData);
        //send response
        res.status(200).json({
            success: true,
            message: 'User is created succesfully',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

export const UserController = {
    createUser
}