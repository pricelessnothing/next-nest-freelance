import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as ms from 'string-to-ms';

dotenv.config({
  path: path.resolve(__dirname, '..', '..', '..', 'env', 'postgres.env'),
});

@Injectable()
class ConfigService {
  constructor(private env: { [key: string]: string | undefined }) {}

  private get(key: string): string {
    return this.env[key];
  }

  public getSessionConfig() {
    return {
      COOKIE_MAX_AGE: ms(this.get('COOKIE_MAX_AGE')) as number,
      COOKIE_NAME: this.get('COOKIE_NAME') as string,
    };
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.get('POSTGRES_HOST'),
      port: parseInt(this.get('POSTGRES_PORT')),
      username: this.get('POSTGRES_USER'),
      password: this.get('POSTGRES_PASSWORD'),
      database: this.get('POSTGRES_DATABASE'),

      entities: [path.join(__dirname, '..', '**', '*.entity{.ts,.js}')],

      synchronize: true,
    };
  }
}

const configService = new ConfigService(process.env);

export { configService };
