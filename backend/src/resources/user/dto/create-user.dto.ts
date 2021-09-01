import { UserType } from '../../../types/userTypes';

export class CreateUserDto {
  type: UserType;
  login: string;
  password: string;
  name: string;
  registered: Date;
}
