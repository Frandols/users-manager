import config from '../../config'

import jwt from 'jsonwebtoken'

const sign = (object: Object) => jwt.sign(object, config.privateKey)

const verify = (token: string) =>
  jwt.verify(token, config.privateKey, async (_, decoded) => decoded)

export { sign, verify }
