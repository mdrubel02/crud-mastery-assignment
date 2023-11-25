import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z
    .string(),
  lastName: z.string(),
});
const userAddressSchema = z.object({
    street: z
      .string(),
      city: z.string(),
      country: z.string(),
  });

  const userOrderSchema = z.object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number(),
  });

export const userValidationSchema = z.object({
  userId: z.number(),
  userName: z.string(),
  password: z.string().max(20),
  fullName: userNameSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: userAddressSchema,
  orders: z.array(userOrderSchema),
});

export default userValidationSchema;
