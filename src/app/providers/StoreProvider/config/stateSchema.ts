import { IUserSchema } from 'entities/User/model/types/user';
import { ILoginSchema } from 'features/authByUsername';

export interface StateSchema {
  user: IUserSchema
  loginForm: ILoginSchema
}
