import dotenv from 'dotenv'

dotenv.config()

export default {
  port: Number(process.env.PORT) || 3000,
  host: process.env.HOST || 'localhost',
  dbURI: process.env.DB_URI as string,
  privateKey: process.env.PRIVATE_KEY as string,
}
