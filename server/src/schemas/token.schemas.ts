import { object } from 'yup'

import { userCredentialsSchema } from '../schemas'

const getTokenSchema = object({
  query: userCredentialsSchema,
})

export { getTokenSchema }
