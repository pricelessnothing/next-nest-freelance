import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserCredentialsDto } from './dto/user-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    return await this.authService.register(userData);
  }

  @Post('login')
  async login(@Body() { login, password }: UserCredentialsDto) {
    return await this.authService.login(login, password);
  }
}
