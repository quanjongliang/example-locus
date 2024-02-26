import { Module } from '@nestjs/common';
import { LocusController } from './controllers';
import { LocusService } from './services';

@Module({
  controllers: [LocusController],
  providers: [LocusService],
})
export class LocusModule {}
