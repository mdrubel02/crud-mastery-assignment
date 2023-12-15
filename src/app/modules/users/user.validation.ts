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
    productName: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
  });

export const userValidationSchema = z.object({
  body: z.object({
    userId: z.number(),
    username: z.string(),
    password: z.string().max(20),
    fullName: userNameSchema,
    age: z.number(),
    email: z.string().email(),
    isActive: z.boolean(),
    hobbies: z.array(z.string()),
    address: userAddressSchema,
    orders: z.array(userOrderSchema).optional(),
  })
});

export default userValidationSchema;
