import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({ path: '.env' });
const configService = new ConfigService();

const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  // migrations: [__dirname + '/src/database/migrations/*.ts'],
  migrations: [
    __dirname +
      `/src/database/migrations/${configService.get('NODE_ENV', 'dev')}/*.ts`,
  ],
  logging: true,
  entities: ['dist/src/**/*.entity.js'],
});

export default dataSource;
