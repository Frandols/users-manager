import { object, string, InferType } from 'yup'

const userCredentialsSchema = object({
  name: string()
    .required('Name required')
    .min(4, 'Name must have 4 characters minimum')
    .max(16, 'Name must have 16 characters maximum'),
  password: string()
    .required('Password required')
    .min(8, 'Password must have 8 characters minimum')
    .max(16, 'Password must have 16 characters maximum'),
})

const createUserSchema = object({
  body: userCredentialsSchema,
})

const updateUserSchema = object({
  body: object({
    name: string()
      .min(4, 'Name must have 4 characters minimum')
      .max(16, 'Name must have 16 characters maximum'),
    password: string()
      .min(8, 'Password must have 8 characters minimum')
      .max(16, 'Password must have 16 characters maximum'),
  }),
})

type UserCredentials = InferType<typeof userCredentialsSchema>
type UserInput = InferType<typeof createUserSchema>['body']

export { createUserSchema, updateUserSchema, userCredentialsSchema }
export type { UserCredentials, UserInput }
