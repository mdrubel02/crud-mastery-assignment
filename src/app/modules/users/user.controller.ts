import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  const { user: userData } = req.body;
  //will call service fun to send this data
  try {
    const result = await UserServices.createUserIntoDB(userData);
    //send response
    res.status(200).json({
      success: true,
      message: 'User created succesfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found',
      },
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserIntoDB();
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(501).json({
      seccuss: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found',
      },
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.getSingleUserIntoDB(id);
    res.status(200).json({
      status: 'success',
      message: 'Single user fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(501).json({
      seccuss: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found',
      },
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const userData = req.body;
    const result = await UserServices.updateUser(id, userData);
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(501).json({
      seccuss: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found',
      },
    });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    await UserServices.deleteUser(id);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (error) {
    res.status(501).json({
      seccuss: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found',
      },
    });
  }
};

const getUserOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.getUserOrder(id);
    res.status(200).json({
      seccuss: true,
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(501).json({
      seccuss: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found',
      },
    });
  }
};
const updateUserOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const orderData = req.body;
    await UserServices.updateUserOrders(id, orderData);
    res.status(200).json({
      success: true,
      message: 'Order create successfully!',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Orders not found',
      error: {},
    });
  }
};
const ordersTotalCost = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.ordersTotalCost(id);
    res.status(200).json({
      success: true,
      message: 'Total price calculate successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Orders not found',
      error: {},
    });
  }
};
export const UserController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
  getUserOrders,
  updateUserOrders,
  ordersTotalCost
};
