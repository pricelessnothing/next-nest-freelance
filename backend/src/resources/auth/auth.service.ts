import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { configService } from '../../config/config.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { v4 as uuid } from 'uuid';

const { COOKIE_MAX_AGE } = configService.getSessionConfig();

@Injectable()
export class AuthService {
  private sessions: Record<string, NodeJS.Timeout> = {};

  private startOrUpdateSession(sessionId: string): void {
    if (this.sessions[sessionId]) {
      clearTimeout(this.sessions[sessionId]);
    }
    this.sessions[sessionId] = setTimeout(() => {
      delete this.sessions[sessionId];
    }, COOKIE_MAX_AGE);
  }

  private isActiveSession(sessionId: string): boolean {
    return this.sessions[sessionId] !== undefined;
  }

  private removeSession(sessionId: string): void {
    if (this.sessions[sessionId]) {
      clearTimeout(this.sessions[sessionId]);
    }
    delete this.sessions[sessionId];
  }

  constructor(private readonly userService: UserService) {}

  async register(userData: CreateUserDto) {
    const foundUsers = await this.userService.findByLogin(userData.login);

    if (foundUsers) {
      throw new ConflictException('User with given login already exists');
    }

    return await this.userService.create(userData);
  }

  async login(login: string, password: string) {
    const [user] = await this.userService.findWhere({ login, password });

    if (!user) {
      throw new BadRequestException('No user matching given credentials');
    }

    const sessionId = uuid() as string;

    this.startOrUpdateSession(sessionId);

    const { type, name, login: userLogin } = user;

    return {
      sessionId,
      user: {
        type,
        name,
        login: userLogin,
      },
    };
  }
}
