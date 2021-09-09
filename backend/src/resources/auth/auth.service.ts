import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(userData: CreateUserDto) {
    const foundUsers = await this.userService.findByLogin(userData.login);

    if (foundUsers) {
      throw new ConflictException();
    }

    await this.userService.create(userData);
  }
}
