import bcrypt from 'bcrypt'

import { Document, Schema, model } from 'mongoose'

import { UserInput } from '../schemas'

interface UserDocument extends UserInput, Document {
  createdAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

export type { UserDocument }

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      length: { minlength: 4, maxlength: 16 },
    },
    password: {
      type: String,
      required: true,
      length: { min: 8, max: 16 },
    },
  },
  { timestamps: { createdAt: false, updatedAt: true } }
)

const getHashedPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hashSync(password, salt)

  return hash
}

userSchema.pre('save', async function () {
  const user = this as UserDocument

  const hashedPassword = await getHashedPassword(user.password)

  user.password = hashedPassword
})

userSchema.pre('findOneAndUpdate', async function (next: () => void) {
  const update = this.getUpdate() as Partial<UserDocument>

  const password = update.password

  if (!password) return next()

  const hashedPassword = await getHashedPassword(password)

  this.set({ password: hashedPassword })
})

userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as UserDocument

  return bcrypt.compare(candidatePassword, user.password).catch(() => false)
}

const User = model<UserDocument>('User', userSchema)

export { User }
