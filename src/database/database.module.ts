import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Locus, LocusMember } from './entities';
import { LocusMemberRepository, LocusRepository } from './repositories';

const entities = [Locus, LocusMember];
const providers = [LocusRepository, LocusMemberRepository];

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          entities: [join(__dirname, '**', '*.entity.{js,ts}')],
          synchronize: false,
          autoLoadEntities: true,
          cache: {
            type: 'database',
            tableName: 'carz_query_result_cache',
          },
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          logging: ['query', 'error'],
        };
      },
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers,
  exports: providers,
})
export class DatabaseModule {}
