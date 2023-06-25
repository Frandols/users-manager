import config from '../../config'

import mongoose from 'mongoose'

import { log } from '../utilities'

const connectDatabase = () =>
  mongoose
    .connect(config.dbURI as string)
    .then(() => log.info('Database connected'))
    .catch((error) => log.error(error))

export default connectDatabase
