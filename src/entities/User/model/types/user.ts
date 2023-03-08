export interface IUser {
  id: string,
  username: string
}

export interface IUserSchema {
  authdata?: IUser
}
