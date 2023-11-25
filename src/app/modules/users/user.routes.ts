import  express from 'express';
import { UserController } from './user.controller';


const router = express.Router();
router.post('/', UserController.createUser )
router.get('/', UserController.getUser)
router.get('/:userId', UserController.getSingleUser)
router.put('/:userId', UserController.updateUser)
router.delete('/:userId', UserController.deleteUser)
router.get('/:userId/orders', UserController.getUserOrders)
router.put('/:userId/orders', UserController.updateUserOrders)
router.get('/:userId/orders/total-price', UserController.ordersTotalCost)

export const UserRoutes = router ;