import { z } from 'zod';

export const petsSchema = z
  .object({
    pet: z.string(),
  })
  .optional();

export const schema = z
  .object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    age: z.number().min(18).max(70),
    pets: petsSchema,
    password: z.string().min(5).max(10),
    confirmPassword: z.string().min(5).max(10),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
