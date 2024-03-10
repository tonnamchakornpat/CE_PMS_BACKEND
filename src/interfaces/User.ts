export interface IUser {
  username: string
  password?: string
}

export interface ITeacher extends IUser {
  name?: string
  role: number
  createAt?: Date
  updateAt?: Date
}
