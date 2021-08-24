import { ConnectionOptions, createConnection } from 'typeorm';
import { configService } from '../config/config.service';

export const databaseProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async () => {
    return await createConnection(
      configService.getTypeOrmConfig() as ConnectionOptions,
    );
  },
};
