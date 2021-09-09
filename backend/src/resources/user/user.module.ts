import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '../../database/database.module';
import { userProvider } from './user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, userProvider],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
