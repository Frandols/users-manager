import { Request, Response, NextFunction } from 'express'
import { AnySchema } from 'yup'

const validateSchema =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error: any) {
      return res.status(400).send(error.message)
    }
  }

export default validateSchema
