import { Express } from 'express'

import { validateSchema, requireToken } from './middlewares'
import { createUserSchema, getTokenSchema, updateUserSchema } from './schemas'
import {
  createUserHandler,
  getUsersHandler,
  getTokenHandler,
  updateUserHandler,
  deleteUserHandler,
} from './controllers'

const useRoutes = (app: Express) => {
  app
    .route('/users')
    .post(validateSchema(createUserSchema), createUserHandler)
    .get(getUsersHandler)
    .patch([validateSchema(updateUserSchema), requireToken], updateUserHandler)
    .delete(requireToken, deleteUserHandler)

  app.get('/tokens', validateSchema(getTokenSchema), getTokenHandler)
}

export default useRoutes
