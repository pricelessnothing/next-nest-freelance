import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './resources/user/user.module';
import { AuthModule } from './resources/auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  providers: [],
})
export class AppModule {}
